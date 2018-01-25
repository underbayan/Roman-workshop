import './styles/index.scss'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import Routes from './routes'
import registerServiceWorker from './utils/registerServiceWorker'
import createHistory from 'history/createBrowserHistory'
// eslint-disable-next-line
let history = createHistory()
let store = configureStore(history)
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
