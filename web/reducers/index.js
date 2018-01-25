import {handleActions} from 'redux-actions'
const authReducer = handleActions({
  'AUTH_LOGIN': (state, action) => {
    store.local({...action.payload})
    state = {...action.payload}
    return state
  },
  'AUTH_LOGOUT': (state, action) => {
    store.local({...action.payload})
    state = {...action.payload}
    return state
  }
}, {...store.local(), ...store.session()})

const overviewReducer = handleActions({
    'UPDATE_OVERVIEW': (state, action) => {
      state = {...action.payload}
      return state
    },
    'UPDATE_STATICS': (state, action) => {
      state.sub = {...action.payload}
      return state
    }
  },
  {test: 'test'}
)
const rootReducer = REDUX.combineReducers({
  authReducer, overviewReducer,
})
export default rootReducer
