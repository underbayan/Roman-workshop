import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import 'Json.scss'
export default class Json extends React.PureComponent {
  constructor(props) {
    super(props);
    this.modes = ['code', 'form', 'text', 'tree', 'view']
    this.state = {}
  }

  componentDidMount() {
    this.editor = new JSONEditor(ReactDOM.findDOMNode(this.refs.editor), {mode: 'code'})
    // set json
    var json = {
      Array: [1, 2, 3],
      Boolean: true,
      Null: null,
      Number: 123,
      Object: {a: 'b', c: 'd'},
      String: 'Hello World'
    };
    this.editor.set(json);
  }

  render() {
    return <div className="row">
      <div className="_change_mode col-24 ">
        <label >Edit mode</label><select id="inputGroupSelect01" defaultValue={'code'} onChange={e=> this.editor.setMode(e.target.value)}>{this.modes.map((o)=><option>{o}</option>)}</select>
      </div>
      <div className="_json_editor col-12" ref="editor"></div>
      <div className="_tool"></div>
    </div>
  }
}
