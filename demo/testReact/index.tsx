const cache = new Map();
const stateStore = [];
let storeIdx = 0
const React = {
  createElement(tag, props, ...children) {
    if (typeof tag === 'function') {
      try { return tag(props, ...children); }
      catch ({ promise, key }) {
        promise.then(data => {
          cache.set(key, data);
          reRender();
        })
        return { tag: 'h1', children: ['Loading...'] };
      }
    }
    return { tag, props, children };
  },
  createResource(promiseFn, key) {
    if (cache.has(key)) {
      return cache.get(key);
    }
    throw { promise: promiseFn(), key };
  },
  useState(initialState) {
    const idx = storeIdx++;
    stateStore[idx] = stateStore[idx] || initialState;
    return [stateStore[idx], (newState) => {
      stateStore[idx] = newState;
      reRender();
    }];
  },
  render(reactElement, container) {
    if (typeof reactElement === 'string' || typeof reactElement === 'number') {
      return container.appendChild(document.createTextNode(reactElement as string));
    }
    const realElement = document.createElement(reactElement.tag);
    for (let key in reactElement.props) {
      realElement[key] = reactElement.props[key];
    }
    reactElement.children.forEach(child => {
      React.render(child, realElement);
    });
    container.appendChild(realElement);
  }
}
const App = () => {
  return <div>Hello, world!
    <ul style="color: red;">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <StateTest />
    <DogResource />
  </div>;
};

const DogResource = () => {
  const url = React.createResource(
    () =>
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {
          return data.message;
        }),
    "dog"
  );
  return <img src={url} />
}
const StateTest = () => {
  const [count, setCount] = React.useState(0);
  return <div>
    <p>Count: {count}</p>
    <button onclick={() => setCount(count + 1)}>Increment</button>
  </div>;
}

const reRender = () => {
  storeIdx = 0
  const app = document.getElementById('app');
  app.innerHTML = '';
  React.render(<App />, app);
}

reRender();