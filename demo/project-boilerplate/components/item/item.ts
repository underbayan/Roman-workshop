import { styles, state, props, telemetryDirective } from './'
export ({ props, env, strings, config }) => {
  const stringLocalized = strings.item.strings.helloWord
  const [state] = useState()
  return <Item props telemetryDirective(props) styles stringLocalized state />
}