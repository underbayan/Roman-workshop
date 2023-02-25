var React = {
    createElement: function (tag, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        if (typeof tag === "function") {
            try {
                return tag();
            }
            catch (_a) {
                var promise = _a.promise, key_1 = _a.key;
                console.log(promise, key_1);
                promise.then(function (data) {
                    promiseCache.set(key_1, data);
                    rerender();
                });
                return { tag: "h1", children: ["loading..."] };
            }
        }
        return { tag: tag, props: props, children: children };
    },
};
var store = [];
var storeIdx = 0;
var useState = function (initState) {
    var frozenIdx = storeIdx;
    store[frozenIdx] = store[frozenIdx] || initState;
    var setVal = function (newVal) {
        store[frozenIdx] = newVal;
        rerender();
    };
    storeIdx++;
    return [store[frozenIdx], setVal];
};
var promiseCache = new Map();
var createResource = function (promiseFn, key) {
    if (promiseCache.has(key)) {
        return promiseCache.get(key);
    }
    throw { promise: promiseFn(), key: key };
};
var App = function () {
    var _a = useState("change me"), text = _a[0], setText = _a[1];
    var _b = useState(0), counter = _b[0], setCounter = _b[1];
    var url = createResource(function () {
        return fetch("https://dog.ceo/api/breeds/image/random")
            .then(function (r) { return r.json(); })
            .then(function (data) {
            return data.message;
        });
    }, "dog");
    return (React.createElement("div", null,
        React.createElement("h1", { className: "test-class" }, " Hello world "),
        React.createElement("input", { value: text, onchange: function (e) {
                setText(e.target.value);
            } }),
        text,
        React.createElement("h2", null,
            counter,
            " "),
        React.createElement("button", { onclick: function () {
                setCounter(counter + 1);
            } }),
        React.createElement("button", { onclick: function () {
                setCounter(counter - 1);
            } }),
        React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ut quisquam recusandae repudiandae debitis dolore veniam provident.Placeat, reiciendis dolores.Eum nihil nemo odit.Voluptatem quibusdam quia pariatur vitae non dicta ?"),
        React.createElement("img", { src: url })));
};
console.log(React.createElement(App, null));
var render = function (reactElement, container) {
    console.log(reactElement);
    if (typeof reactElement !== "object") {
        container.appendChild(document.createTextNode(reactElement));
        return;
    }
    var realElement = document.createElement(reactElement.tag);
    for (var key in reactElement.props) {
        realElement[key] = reactElement.props[key];
    }
    reactElement.children &&
        reactElement.children.forEach(function (child) {
            render(child, realElement);
        });
    container.appendChild(realElement);
};
// render(<App />, document.getElementById("app"));
console.log(React.createElement(App, null));
var rerender = function () {
    storeIdx = 0;
    document.getElementById("app").innerHTML = "";
    render(React.createElement(App, null), document.getElementById("app"));
};
