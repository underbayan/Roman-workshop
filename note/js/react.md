- React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
- Components can render other components, but you must never nest their definitions.
- For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.
- I prefer using class components insread of pure function components for stateful components.
- React.memo: pureComponent
- useCallback: methods of function instance
- useState: properties of function instance
- useState(Value| initialFun)
  - SetState won't take effect immediately
- useRef: it mocks the this of class instance, return an object like { current}
- useEffect: useEffect(()=>{ return destructorForPreviousDependency})
- useReducer: recommend it for multiple states. 
  - const [state, dispatch] = useReducer(reducer, initialArg, init?)
- React.StrictMode: render twice in dev mode 
````
// React useMemo(reactive memorize fn),useEffect(lifecycle),useState(reactive properties),useRef(instance properties),usecallback(reactive instance methods)
// memo(PureComponent)
````


