// useState Hook
let state;
function useState(initialValue) {
  state = state || initialValue; // 初始值只在第一次渲染时使用
  function setState(newState) {
    state = newState; // 更新状态
    reRender(); // 重新渲染组件
  }
  return [state, setState];
}

// useEffect Hook
let effectList = [];
let effectIndex = 0;
function useEffect(callback, deps) {
  const oldEffect = effectList[effectIndex];
  const hasChangedDeps = oldEffect && !deps.every((dep, i) => dep === oldEffect.deps[i]);
  if (hasChangedDeps) {
    // 依赖项变化时，重新注册effect
    oldEffect.cleanup();
    effectIndex = 0;
  }
  const effect = {
    deps,
    cleanup: callback(),
  };
  effectList[effectIndex++] = effect;
}

// render函数
function render(element, container) {
  // 构建Fiber树
  const rootFiber = {
    dom: container,
    props: {
      children: [element],
    },
  };
  nextUnitOfWork = rootFiber;
}

// Fiber更新
let nextUnitOfWork = null;
function workLoop(deadline) {
  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  if (!nextUnitOfWork && pendingCommit) {
    commitAllWork(pendingCommit);
  }
  requestIdleCallback(workLoop);
}
requestIdleCallback(workLoop);

// performUnitOfWork函数
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    // 创建DOM节点
    fiber.dom = createDom(fiber);
  }
  if (fiber.parent) {
    // 将DOM节点插入到父节点中
    fiber.parent.dom.appendChild(fiber.dom);
  }
  // 执行组件函数，更新Fiber树
  const children = fiber.props.children;
  reconcileChildren(fiber, children);
  // 返回下一个Fiber
  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}

// reconcileChildren函数
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = wipFiber.alternate ? wipFiber.alternate.child : null;
  let prevSibling = null;
  while (index < elements.length || oldFiber != null) {
    const element = elements[index];
    let newFiber = null;
    const sameType = oldFiber && element && element.type === oldFiber.type;
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: 'UPDATE',
      };
    }
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: 'PLACEMENT',
      };
    }
    if (oldFiber && !sameType) {
      // 删除旧节点
      oldFiber.effectTag = 'DELETION';
      deletions.push(oldFiber);
    }
    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }
    if (index === 0) {
      wipFiber.child = newFiber;
    } else if (element) {
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }
}

// createDom函数
function createDom(fiber) {
  const dom =
    fiber.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(fiber.type);
  updateDom(dom, {}, fiber.props);
  return dom;
}

// updateDom函数
function updateDom(dom, prevProps, nextProps) {
  // 删除旧的或变化的事件处理器
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isGone(nextProps, key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });
  // 添加新的或变化的事件处理器
  Object.keys(nextProps)
    .filter(isEvent)
    .filter((key) => !isGone(nextProps, key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
  // 删除旧的属性
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone.bind(null, nextProps))
    .forEach((name) => {
      dom[name] = '';
    });
  // 添加新的或变化的属性
  Object.keys(nextProps)
    .filter(isProperty)
    .filter((key) => !isGone(prevProps, nextProps, key))
    .forEach((name) => {
      dom[name] = nextProps[name];
    });
}

// isEvent函数和isProperty函数
const isEvent = (key) => key.startsWith('on');
const isProperty = (key) => key !== 'children' && !isEvent(key);
const isGone = (prev, next, key) => !(key in next) || prev[key] !== next[key];

// commitAllWork函数
function commitAllWork(fiber) {
  fiber.effects.forEach((effect) => {
    if (effect.effectTag === 'PLACEMENT') {
      effect.parent.dom.appendChild(effect.dom);
    } else if (effect.effectTag === 'UPDATE') {
      updateDom(effect.dom, effect.alternate.props, effect.props);
    } else if (effect.effectTag === 'DELETION') {
      commitDeletion(effect, effect.parent.dom);
    }
  });
  fiber.dom = fiber.effects[0].dom;
  nextUnitOfWork = null;
  pendingCommit = null;
}

// commitDeletion函数
function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else {
    commitDeletion(fiber.child, domParent);
  }
}

// 示例组件
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Effect is running');
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

// 渲染示例组件
render(<Counter />, document.getElementById(''))







/////////////////////////

// From chat gpt
// 组件类定义
class Component {
  constructor(props) {
    this.props = props; // 组件属性
    this.state = {}; // 组件状态
  }

  // 更新组件状态
  setState(newState) {
    this.state = Object.assign({}, this.state, newState);
    // 触发组件重新渲染
    this.render();
  }

  // 渲染组件
  render() {
    // 抽象方法，需要子类实现
  }
}

// DOM元素渲染函数
function createElement(type, props, ...children) {
  return { type, props, children };
}

// 渲染DOM元素到页面
function render(element, container) {
  if (typeof element.type === 'function') {
    // 渲染组件
    const component = new element.type(element.props);
    const renderedElement = component.render();
    render(renderedElement, container);
  } else if (typeof element === 'string' || typeof element === 'number') {
    // 渲染文本节点
    const textNode = document.createTextNode(element);
    container.appendChild(textNode);
  } else {
    // 渲染DOM元素
    const domElement = document.createElement(element.type);
    for (let prop in element.props) {
      if (prop === 'children') {
        // 递归渲染子元素
        for (let child of element.props.children) {
          render(child, domElement);
        }
      } else {
        // 设置DOM元素属性
        domElement[prop] = element.props[prop];
      }
    }
    container.appendChild(domElement);
  }
}
