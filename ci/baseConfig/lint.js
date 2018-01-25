const lintConfig = {
  extends: [require.resolve('eslint-config-react-app')],
  "rules": {
    "react/jsx-no-undef": 0,
    "quotes": [2, "single"]
  },
  "globals": {
    "React": true,
    "ReactDOM": true,
    "PropTypes": true,
    "Promise": true,
    "fetch": true,
    "Service": true,
    "REDUX": true,
    "REACT_REDUX": true,
    "RESELECT": true,
    "LINK": true,
    "ROUTE": true,
    "ROUTER": true,
    "BROWSERROUTER": true,
    "INDEXROUTE": true,
    "ConnectedRouter": true,
    "syncHistoryWithStore": true,
    "routerReducer": true,
    "bindActionCreators": true,
    "connect": true,
    "store": true,
    "videojs": true,
    "window.videojs": true
  }
}
module.exports = {lintConfig}
