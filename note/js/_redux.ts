type Action = { type: string; payload: unknown }
type State<T> = { [T]: unknown }
type Reducer<T> = (preState: State<T>, action) => State<T>

type CombineReducer = (rs: {
  [key: T]: Reducer<T>
}) => Reducer<unknown>


type Store = {
  dispatch: (action: Action) => void,
  subscribe: (cd: CallableFunction) => void
  unSubscribe: (cd: CallableFunction) => void
  getState: () => State<unknown>
}
type CreateStore = (r: Reducer, is: State<unknown>, enhance: Middleware) => Store
type Middleware = (store) => next => (action: Action): Dispatch

const compose = (...fns) => fns.reduce((a, b) => (...ia) => b ? b(a(...ia)) : a)
//store = applyMiddleware(ms)(createStore)(reducer,initState)
const applyMiddleware = (...ms: Middleware[]) => (cs: CreateStore) => (...args) => {
  const store = cs(args)
  const chains = ms.map(m => m({ ...store, dispatch: () => { throw "" } }))
  const dispatch = compose(chains)(store.dispatch)
  return { ...store, dispatch }
}

const combineReducer: CombineReducer = (rs): Reducer<unknow> => {
  return (state: State<unknown>, action: Action) => {
    let changed = false
    Object.keys(rs).map(k => {
      const reducer = rs[k]
      const istate = state[k]
      const newState = reducer(istate, action)
      if (newState === state[k]) continue
      state[k] = newState
      changed = true
    })
  }
}

const createStore = (reducer, state, enhance) => {
  const cbs = []
  const _state = state
  if (enhance) {
    return enhance(createStore)(reducer, state)
  }
  return {
    getState: () => _state
    subscribe: (cb) => cbs.push(cb),
    unSubscribe: (cb) => cbs.splice(cbs.indexOf(cd), 1),
    dispatch: (action, payload) => {
      reducer(action, payload)
      cbs.map(cb => cb())
    }
  }
}