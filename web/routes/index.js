// import tt from '../components/Json'
/* eslint-disable */
import CommonFooter from '../components/footer'
import CommonHeader from '../components/header'

function a(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const {default: component} = await importComponent();
      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
class Routes extends React.Component {
  render() {
    // let tt=require('../components/index')
    return (
      <BROWSERROUTER>
        <div>
          <CommonHeader/>
          <section className="content">
            <ROUTE path="/json" component={a(()=> System.import('../components/Json'))}/>
            <ROUTE path="/flex-note" component={a(()=> System.import('../components/note/Flex'))}/>
          </section>
          <CommonFooter/>
        </div>
      </BROWSERROUTER>
    )
  }
}
export default Routes
/* eslint-enable */

