callcc：call_with_current_continuation
delimited continuations https://en.wikipedia.org/wiki/Delimited_continuation
continuation
in CPS continuations are reified as first class arguments to CPS functions.
cps
suspended computations: 区别于 sleep，类似 delay 的 不会 block 进程的计算。比如 await

> generator: 返回迭代器的函数
> 迭代器： 实现 next 函数 的对象
> next 函数：返回{done:false, value:'' }的函数

- Passing Style (CPS) are more flexible in terms of control transfer manipulation
- a major drawback of CPS programs is that they are harder to read and write by humans,so they are more suitable to be manipulated by other programs like compilers or interpreters.
  generators
  gernerator functions

## 文章分四个部分：

- continuations 的概念和 控制转移器（control transfer）
- 使用 generators 去捕捉 continuations
- 界定 continuations 的范围
- 实现 Algebraic Effects and Handlers

### 第一部分 cps 风格 和 控制转移器

- 首先我们先构造自己的 functional 语言，支持 数字的加减，函数调用，和返回表达式

  - 构建 AST

    ```javascript
    function fun(param, body) {
      return { type: 'fun', param, body }
    }

    function call(funExp, argExp) {
      return { type: 'call', funExp, argExp }
    }

    function add(exp1, exp2) {
      return { type: 'add', exp1, exp2 }
    }

    // example
    const doubleFun = fun('x', add('x', 'x'))
    program = call(doubleFun, 10)
    ```

  - 解释器
    ```javascript
    function evaluate(exp, env) {
      if (typeof exp === 'number') {
        return exp
      }
      if (typeof exp === 'string') {
        return env[exp]
      }
      if (exp.type === 'add') {
        return evaluate(exp.exp1, env) + evaluate(exp.exp2, env)
      }
      if (exp.type === 'fun') {
        return function(value) {
          const funEnv = { ...env, [exp.param]: value }
          return evaluate(exp.body, funEnv)
        }
      }
      if (exp.type === 'call') {
        const funValue = evaluate(exp.funExp, env)
        const argValue = evaluate(exp.argExp, env)
        return funValue(argValue)
      }
    }
    evaluate(program)
    ```

  > 仔细看我们实现的解释器，实现的方式是 direct style。 所谓的 direct style 就是函数通过 return 的方式获取了 计算后的结果。
  > 我们这里希望把它转化为 cps（Continuation Passing Style）风格。所谓的 cps 风格有这三个特征：
  >
  > - 函数接受一个额外参数 callbackFun
  > - 函数不返回 result，而是把它传给 callbackFun
  > - 这个和我们的 async 函数的概念无关
  >
  > 下面是就是一个 cps 风格的函数：
  >
  > ```javascript
  > function add(x, y, next) {
  >   const result = x + y
  >   return next(result)
  > }
  > ```

  - 什么是控制流（control flow）
    - 对于 cpu 来说 js 是顺序执行的，当我们使用 break 或者 if else 的时候我们就会涉及到控制转移的概念，这个概念一个重要的机制就是函数的调用。函数的调用者 caller 会把 callee 的返地址压入栈，在 calle 结束后 pop 出来。因为出栈返回后，我们失去了想要的信息。所以我们使用 cps 风格（never return）来跟踪代码。使用 Cps 不意味着就是 call stack 无关了。而是因为没有返回，每次调用都会有 stack 压入
  - 总结要点

    - csp 不返回结果，有额外的 callback 参数
    - csp 不使用栈来做控制转移器
    - csp 可读性差

#### 第二部分 使用 generators 去捕捉 continuations

- js 没有提供操作 continuations 的能力 ，所以我们使用 gernerator functions 来模拟,下面是风格三种 generators 解释器.

  ```javascript
  function isGenerator(x) {
    return x != null && typeof x.next === 'function'
  }
  // direct style，简单暴力，递归执行。缺点就在于没法对递归过程中的value，做操作。这里好想加个next :)
  function runGeneratorDSP(gen, arg) {
    const { done, value } = gen.next(arg)
    if (done) {
      return value
    }
    // interpret calls to child Generators
    if (isGenerator(value)) {
      const result = runGeneratorDSP(value)
      return runGeneratorDSP(gen, result)
    }
    return runGeneratorDSP(gen, value)
  }
  // Continuation Passing Style，没有使用return，return的操作，用next来代替
  function runGeneratorCPS(gen, arg, next) {
    const { done, value } = gen.next(arg)
    if (done) {
      next(value)
    } else if (isGenerator(value)) {
      runGeneratorCPS(value, null, function(result) {
        runGeneratorCPS(gen, result, next)
      })
    } else {
      runGeneratorCPS(gen, value, next)
    }
  }
  // curried version，支持value 是懒计算的, 不用担心迭代器的next返回的是什么
  function runGeneratorCR(gen, arg, next) {
    const { done, value } = gen.next(arg)
    if (done) {
      next(value)
    } else if (isGenerator(value)) {
      runGeneratorCR(value, null, function continuation(result) {
        runGeneratorCR(gen, result, next)
      })
    } else if (typeof value === 'function') {
      // here we handle suspended computations
      value(function continuation(result) {
        runGeneratorCR(gen, result, next)
      })
    } else {
      runGeneratorCR(gen, value, next)
    }
  }

  function* greet(name) {
    const message = yield `Hi ${name}`
    return message
  }
  console.log('_:', runGeneratorDSP(greet('Stranger')))
  runGeneratorCSP(greet('Stranger'), null, _ => console.log('_:', _))
  runGeneratorCR(greet('Stranger'), null, _ => console.log('_:', _))
  ```

- 如果你消化了上述有趣的代码，那就来做点有意思的两个实验，在这两个实验中把 程序的状态打印出来。在程序的控制流中，我们可以做很多定制。

  ```javascript
  let resume
  const BREAK = next => {
    console.log('**PAUSED**')
    resume = next
  }

  function* main() {
    yield breakTest()
    yield sleep(1000)
    console.log('end of main')
  }

  function* breakTest() {
    for (let i = 1; i < 5; i++) {
      yield sleep(1000)
      console.log('message', i)
      if (i % 2 === 0) yield BREAK
    }
  }
  // typing this in the console
  runGenerator(main(), null, console.log)
  /**
  message 1
  message 2 *\* PROGRAM PAUSED **/
  resume()
  /**
  message 3
  message 4 \***\* PROGRAM PAUSED **/
  resume()
  // end of main
  //////////////////////////////////////////////////
    const result = yield parent()
    return `main result: (${result})`
  }

  function* parent() {
    const result = yield child()
    return `parent result: (${result})`
  }

  function* child() {
    return 'child result'
  }

  runGenerator(main(), null, console.log)
  // => main result: (parent result: (child result))
  ```

- 虽然可跟踪整个程序的状态，但有欠缺。比如:需要在问题出现错误的时候直接停止程序，返回出错的结果，该怎么做？
  我们可以直接使用 exit 函数，当结果发生异常，直接 exit，这样要求每个 gen.next 产生的 value 都要判断。

  ```javascript
  function runGeneratorEXT(gen, arg, exit, next) {
    const { done, value } = gen.next(arg)
    if (done) {
      next(value)
    } else if (isGenerator(value)) {
      runGeneratorEXT(value, null, exit, function continuation(result) {
        runGeneratorEXT(gen, result, exit, next)
      })
    } else if (typeof value === 'function') {
      value(exit, function continuation(result) {
        runGeneratorEXT(gen, result, exit, next)
      })
    } else {
      runGeneratorEXT(gen, value, exit, next)
    }
  }
  ```

  把 runGeneratorEXT 封装一下： exit 叫做 jumpToCallccPos,封装函数叫做 callcc(call_with_current_continuation)

  ```javascript
  function callcc(genFunc) {
    return function(capturedCont) {
      // this is our previous exit
      function jumpToCallccPos(value) {
        return next => capturedCont(value)
      }
      runGenerator(genFunc(jumpToCallccPos), null, capturedCont)
    }
  }
  ```

- 有了 callcc 就可以有 trycc，throwcc，用 yiled 来退出，模拟 try/catch

  ```javascript
  const handlerStack = []

  function* trycc(computation, handler) {
    return yield callcc(function*(k) {
      handlerStack.push([handler, k])
      const result = yield computation
      handlerStack.pop()
      return result
    })
  }

  function* throwcc(exception) {
    const [handler, k] = handlerStack.pop()
    const result = yield handler(exception)
    yield k(result)
  }
  ```

- 我们还可以使用 yield 来做协同调度

  ```javascript
  const processQueue = []

  function fork(gen) {
    return next => {
      processQueue.push(
        (function*() {
          yield gen
          yield dequeue()
        })()
      )
      next()
    }
  }

  const pause = callcc(function*(k) {
    processQueue.push(k())
    yield dequeue()
  })

  function* dequeue() {
    if (processQueue.length) {
      const next = processQueue.shift()
      yield next
    }
  }
  function* main() {
    yield fork(proc('1', 4))
    yield fork(proc('2', 2))
    yield dequeue()
    console.log('end main')
  }

  function* proc(id, n) {
    for (let i = 0; i <= n; i++) {
      yield sleep(1000)
      console.log(id, i)
      yield pause
    }
  }
  // 1 0
  // 2 0
  // 1 1
  // 2 1
  // 1 2
  // 2 2
  // 1 3
  // 1 4
  // end main
  ```

#### 总结：

- generatorsDPS 可以模拟 call stack，不支持 async
- 虽然 callcc 很强大了，但还有局限。因为 yield 捕获的是调用方法中所有的异步操作的最终的结果，不能够在局部的异步操作中返回。我们把这种 continuation 叫做 undelimited continuations

### 第三部分 界定的 continuations（delimited continuations）

- 当 callcc 可以捕获程序的剩余全部流程，我们也可以用来捕获剩余流程的一部分，而非全部。这个时候我们把多个 continuations 的返回值 compose 在一起。我们把这种 continuation 叫做 delimited continuations
- 在 direct stlye code 中，每一个函数调用会 push 一个新的 frame 在栈上，每一个函数结束后，都会在 stack 上被 pop 出来。例如：下面的代码在调用的时候会有 annoymous=>main=>product=>product... 的一个栈信息，在栈信息中我们可以清楚的看出来，哪一些流程已经被执行了，已经现在的执行的状态。
  ```javascript
  /**
   * 在堆栈信息中我们看到那些是执行过，执行顺序是什么
   * 这种call stack 的风格的优点：
   * - 容易实现对stack的高级操作，
   * - 容易实现X features on top of the statefull approach，比如babel可以在开发模式的代码中插入函数名，行数，列等信息
   */
  function main() {
    const result = product([2, 4, 6])
    return result
  }
  function product(xs) {
    if (xs.length === 0) return 1
    const [y, ...ys] = xs
    return y * product(ys)
  }
  ```

#### 使用 generators 处理 call 栈

- cps 与之有极大不用，他将 continuation 视为没有状态的普通的函数，，这样也更为纯粹。下面的代码中我们扩充了 gen 的功能，他不仅要实现 next 的属性方法，还自带一个\_return 属性。 这个\_return 和 gen 相同也是迭代器类型，或者是一个返回迭代器类型的函数。

```javascript
function isGenerator(x) {
  return x != null && typeof x.next === 'function'
}
function runGeneratorDC(gen, arg) {
  const { value, done } = gen.next(arg)

  if (done) {
    const _return = gen._return
    if (isGenerator(_return)) {
      runGeneratorDC(_return, value)
    } else if (typeof _return === 'function') {
      _return(value)
    }
  } else {
    if (isGenerator(value)) {
      value._return = gen
      runGeneratorDC(value, null)
    } else if (typeof value === 'function') {
      value(gen)
    }
  }
}
```

- 为了让 runGeneratorDC 用起来，我们得改写 callcc,新的 callcc 长这个样子

```javascript
function callcc(genFunc) {
  return function(capturedGen) {
    // this is our escape function
    function jumpToCallccPos(value) {
      // instead if resuming the current generator
      // we directly resume the one captured by callcc
      return next => runGeneratorDC(capturedGen, value)
    }
    const gen = genFunc(jumpToCallccPos)
    gen._return = capturedGen
    runGeneratorDC(gen, null)
  }
}
```

- 为了更好的说明 delimited continuations，还要介绍下 reset 和 shift 的概念。我们为了标识特定的堆栈（限制性 continuations），我们需要 reset。 reset 修饰了 generatorFun，使得原有的 generator 被执行后，会在结果上带上\_return 和\_reset 属性。

```javascript
function reset(genFunc) {
  return function(parentGen) {
    const gen = genFunc()
    gen._return = parentGen
    // setting the limit of the continuation
    gen._reset = true
    runGenerator(gen, null)
  }
}
```

- 其实我们单独的分析 reset 的原理是没有任何启发的。 因为 reset 需要和 shift 一起来使用。shift 会一直回溯之前最近的 gen 的\_reset 属性，直到\_reset 为 true。然后才继续 runGen 的过程，shift 直接返回了当前的 continuations

```javascript
function shift(genFunc) {
  return function(parentGen) {
    // finds the closest reset
    let resetGen = parentGen
    while (!resetGen._reset) {
      resetGen = resetGen._return
    }
    const gen = genFunc()
    // gen will directly return to the parent of reset
    gen._return = resetGen._return
    runGenerator(gen, null)
  }
}
```
