## 文章分四个部分：
> [原文在这](https://dev.to/yelouafi/algebraic-effects-in-javascript-part-1---continuations-and-control-transfer-3g88)
- continuations 的概念和 控制转移器（control transfer）
- 使用 generators 去捕捉 continuations
- 界定 continuations 的范围
- 实现 Algebraic Effects and Handlers

### 名词解释

> callcc：call_with_current_continuation
> continuation： is an abstract representation of the control state of a computer program.（简单理解： 一种程序状态）
> delimited continuations: is a "slice" of a continuation frame that has been reified into a function
> generator Function: is a special function that can be used to control the iteration behaviour of a loop.（简单理解：控制并且返回迭代器的函数）
> iterator: is an object that enables a programmer to traverse a container, particularly lists. (简单理解：实现 next 函数 的对象， next 函数：返回{done:false, value:'' }的函数)
> suspended computations: 区别于 sleep，类似 delay 的 不会 block 进程的计算。比如 await
> Continuation Passing Style (CPS) 一种编程风格，函数中没有 return，使用参数中 next 做程序流程控制

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
  >   next(result)
  > }
  > ```

  - 控制流（control flow）
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
  // direct style，简单暴力，递归执行。缺点就在于没法对递归过程中的value做操作。这里好想加个next :)
  function runGeneratorDS(gen, arg) {
    let { done, value } = gen.next(arg)
    if (done) {
      return value
    } else {
      // interpret calls to child Generators
      const result = isGenerator(value) ? runGeneratorDS(value) : value
      return runGeneratorDS(gen, result)
    }
  }
  // Continuation Passing Style，没有使用return的操作，用next来代替,这里也需要递归去调用自身去处理嵌套的generator
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
  // curried version，支持value 是函数，这里是必须的，因为在很多高阶函数的场景，需要对generatorFun 做高阶封装，有了curried，就更容易封装。
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
  console.log('_:', runGeneratorDS(greet('Stranger')))
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
  function runGeneratorEXIT(gen, arg, exit, next) {
    const { done, value } = gen.next(arg)
    if (done) {
      next(value)
    } else if (isGenerator(value)) {
      runGeneratorEXIT(value, null, exit, function continuation(result) {
        runGeneratorEXIT(gen, result, exit, next)
      })
    } else if (typeof value === 'function') {
      value(exit, function continuation(result) {
        runGeneratorEXIT(gen, result, exit, next)
      })
    } else {
      runGeneratorEXIT(gen, value, exit, next)
    }
  }
  ```

  把 runGeneratorEXIT 封装一下： exit 改名叫做 capturedCont,封装函数叫做 callcc(call_with_current_continuation)

  ```javascript
  function callcc(genFunc) {
    return function(capturedCont) {
      // this is our previous exit
      function jumpToCallccPos(value) {
        return next => capturedCont(value)
      }
      runGeneratorEXIT(genFunc(jumpToCallccPos), null, capturedCont)
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

- cps 与之有极大不用，他将 continuation 视为没有状态的普通的函数，，这样也更为纯粹。下面的代码中我们扩充了 gen 的功能，他不仅要实现 next 的属性方法，还自带一个\_return 属性。 这个\_return 和 gen 相同：是一个迭代器，或者是能返回迭代器的高阶函数。

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
function start(gen, onDone) {
  gen._return = onDone
  runGeneratorDC(gen, null)
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

- 为了更好的说明 delimited continuations，还要介绍下 reset 和 shift 的概念。我们为了标识特定的堆栈（限制性 continuations），我们需要 reset。 reset 修饰了 generatorFun，使得原有的 generator 被执行后，会在结果上带上\_reset 属性。reset 和 shift 是高阶函数，是用来修饰 genFun 的。要支持 reset 和 shift 我们要求 rungenerrator 必须是支持 curried 的

```javascript
function reset(genFunc) {
  return function(parentGen) {
    const gen = genFunc()
    gen._return = parentGen
    // setting the limit of the continuation
    gen._reset = true
    runGeneratorDC(gen, null)
  }
}
```

- 其实我们单独的分析 reset 的原理是没有任何启发的。 因为 reset 需要和 shift 一起来使用。shift 会一直回溯之前最近的 gen 的\_reset 属性，直到\_reset 为 true。然后才继续 runGen 的过程。shift 直接返回当前的 continuations 给最近的 reset

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
    runGeneratorDC(gen, null)
  }
}
```

- 神奇的效果来了：

```javascript
function* main() {
  const result = yield reset(function* resetFn() {
    const name = yield child()
    return 'Hi ' + name
  })
  return result
}

function* child() {
  const result = yield shift(function* shiftFn() {
    return 'from inside shift'
  })
  return result
}

start(main(), console.log)
// =>这里的结果是 from inside shift,  这里不是'Hi from inside shift'，return 'Hi ' + name 这行代码不会被执行。 这是rungenerator的和reset 以及shift 共同作用的结果。 直观的调用顺序应该是main() -> reset(resetFn) -> child() -> shift(shiftFn) ，简化以后就变成了main -> shiftFn()。 到这里你估计已经领悟到了reset 和shift的神奇魅力。
```

- 这里的 'Hi ' + name 已经被丢弃了。但是其实我希望的是，reset 修饰的函数处理完 shift 后，程序能够接下来做他应该做的事情。这里我们又要使用黑魔法了：

```javascript
function shift(genFunc) {
  return function(parentGen) {
    // finds the closest reset
    let resetGen = parentGen
    while (!resetGen._reset) {
      resetGen = resetGen._return
    }

    function delimitedCont(value) {
      // captures the continuation from after shift up to reset
      return nextGen => {
        resetGen._return = nextGen
        // resume from the shift's parent frame
        runGeneratorDC(parentGen, value)
      }
    }

    const gen = genFunc(delimitedCont)
    gen._return = resetGen._return
    runGeneratorDC(gen, null)
  }
}
function* main() {
  const x = yield reset(function* resetFn() {
    const a = 10
    const b = yield shift(function* shiftFn(k) {
      const c = yield k(2)
      return c + 3
    })
    return a * b
  })
  return x
}
// 这里的结果是23 不是50 也不是20 。 如果你感到震惊的话，并且隐隐中发现这个机制大有可为，那么你就自己动手写写看。
```

### 实现代数效应（Algebraic Effects）和捕获器（Handlers）

- 现实业务中我们需要一个特殊的流程，我们希望报错的时候，我们能够处理错误同时又能够继续让程序执行下去。举一个例子如下，我们希望 throw 之后程序能够继续，这实际就是 Algebraic Effects 的核心思想。

```javascript

function main() {
  return handler();
}

function handler() {
  try {
    operation();
  } catch (e, resume) {
    return resume("Yassine");
  }
}

function operation() {
  return oneMoreIndirection();
}

function oneMoreIndirection() {
  const name = throw "Your name, please?";
  return `Hi ${name}`;
}
```

- 使用这种思想，我们不仅可以更好的处理错误异常，我们还可以更好的控制程序的流程。我们给自己手动实现一个吧！！！！

  - 先写一个等同 try/catch 的功能

  ```javascript
  function withHandler(handler, gen) {
    function* withHandlerFrame() {
      const result = yield gen
      // eventually handles the return value
      if (handler.return != null) {
        return yield handler.return(result)
      }
      return result
    }

    const withHandlerGen = withHandlerFrame()
    withHandlerGen._handler = handler
    return withHandlerGen
  }
  ```

  - 再一个 preform 函数 用来操作堆栈

  ```javascript
  function perform(type, data) {
    return performGen => {
      // finds the closest handler for effect `type`
      let withHandlerGen = performGen
      while (withHandlerGen._handler == null || !withHandlerGen._handler.hasOwnProperty(type)) {
        if (withHandlerGen._return == null) break
        withHandlerGen = withHandlerGen._return
      }

      if (withHandlerGen._handler == null || !withHandlerGen._handler.hasOwnProperty(type)) {
        throw new Error(`Unhandled Effect ${type}!`)
      }

      // found a handler, get the withHandler Generator
      const handlerFunc = withHandlerGen._handler[type]

      const handlerGen = handlerFunc(data, function resume(value) {
        return currentGen => {
          withHandlerGen._return = currentGen
          runGenerator(performGen, value)
        }
      })

      // will return to the parent of withHandler
      handlerGen._return = withHandlerGen._return
      runGenerator(handlerGen, null)
    }
  }
  ```

- 到了这里，我们仔细看程序 我们发现 reset/shift 和 withHandler 与 perform 有很大的相似之处：

  - reset puts a special mark on a satck frame
    -withHandler installs a handler on a stack frame
  - shift finds the closest reset and becomes the direct child of reset's parent
  - perform finds the closest & matching withHandler, the matching handler becomes the direct child of withHandler's parent
  - shift captures all the intermediate frames and reifies them into an argument to its computation
  - perform captures all the intermediate frames and reifies them into an argument to the matching handler

- 事实上，Algebraic Effects 可以看做一个结构化的 delimited continuations
- 我们现在来把 他们具体应用起来吧：
- 例子 1： 翻转程序执行顺序

```javascript
function log(msg) {
  return perform('log', msg)
}

const reverseLog = {
  *log(msg, resume) {
    yield resume()
    console.log(msg)
  }
}

function* main() {
  return yield withHandler(reverseLog, parent())
}

function* parent() {
  yield child()
}

function* child() {
  yield log('A')
  yield log('B')
  yield log('C')
}
// "C", "B", "A"
```

- 例子 2： 结合程序的分步的结果

```javascript
const collectLogs = {
  return(x) {
    return [x, '']
  },
  *log(msg, resume) {
    const [x, acc] = yield resume()
    return [x, `${msg} {acc}`]
  }
}

function* main() {
  return yield withHandler(collectLogs, parent())
}

function* parent() {
  return yield child()
}

function* child() {
  yield log('A')
  yield log('B')
  yield log('C')
  return 10
}

start(main(), console.log)
// => [10, "A B C "]
```

- 我们还可以 compose 两个不同的 handler

```javascript
const reverseLog = {
  *log(msg, resume) {
    yield resume()
    console.log(msg)
    yield log(msg)
  }
}

const collectLogs = {
  return(x) {
    return [x, '']
  },
  *log(msg, resume) {
    const [x, acc] = yield resume()
    return [x, `${msg} ${acc}`]
  }
}

function* main() {
  return yield withHandler(collectLogs, withHandler(reverseLog, parent()))
}

// ... rest unmodified

start(main(), console.log)
// => C
// => B
// => A
// => [undefined, "C B A "]
```

> 其他的有趣的 javascript algebraic effect 例子可以在这里看到： https://github.com/yelouafi/algebraic-effects.js/tree/master/examples
>
> 更多的看看 coaml 语言吧： https://github.com/kayceesrk/effects-examples
