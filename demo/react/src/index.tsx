const React = {
  createElement(tag, props, ...children) {
    if (typeof tag === "function") {
      try {
        return tag();
      } catch ({ promise, key }) {
        promise.then((data) => {
          promiseCache.set(key, data);
          rerender();
        });
        return { tag: "h1", children: ["loading..."] };
      }
    }
    return { tag, props, children };
  },
};


/** React hooks use a array to store all hook state */
const store = [];
let storeIdx = 0;
const useState = (initState) => {
  const frozenIdx = storeIdx;
  store[frozenIdx] = store[frozenIdx] || initState;
  const setVal = (newVal) => {
    store[frozenIdx] = newVal; //FrozenIdx will be cached.
    rerender();
  };
  storeIdx++;
  return [store[frozenIdx], setVal];
};
const promiseCache = new Map();
const createResource = (promiseFn, key) => {
  if (promiseCache.has(key)) {
    return promiseCache.get(key);
  }
  throw { promise: promiseFn(), key };
};
const App = () => {
  const [text, setText] = useState("change me");
  const [counter, setCounter] = useState(0);
  const url = createResource(
    () =>
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {
          return data.message;
        }),
    "dog"
  );
  return (
    <div>
      <h1 className="test-class" > Hello world </h1>
      <input
        value={text}
        onchange={(e) => {
          setText(e.target.value);
        }}
      />
      {text}
      <h2>{counter} </h2>
      <button
        onclick={() => {
          setCounter(counter + 1);
        }}
      >+
      </button>
      <button
        onclick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Ut quisquam recusandae repudiandae debitis dolore
        veniam provident.Placeat, reiciendis dolores.Eum nihil nemo odit.Voluptatem quibusdam quia pariatur vitae non
        dicta ?
      </p>
      <img src={url} />
    </div>
  );
};

console.log(<App />);

const render = (reactElement, container) => {
  if (typeof reactElement !== "object") {
    container.appendChild(document.createTextNode(reactElement));
    return;
  }
  const realElement = document.createElement(reactElement.tag);
  for (let key in reactElement.props) {
    realElement[key] = reactElement.props[key];
  }
  reactElement.children &&
    reactElement.children.forEach((child) => {
      render(child, realElement);
    });
  container.appendChild(realElement);
};

const rerender = () => {
  storeIdx = 0;
  document.getElementById("app").innerHTML = "";
  render(<App />, document.getElementById("app"));
};

