import mixin from  './mixins'
const ENTER_KEY = 13
let formMixin = mixin({
  handleKeyDown(event) {
    if (event.which === ENTER_KEY) {
      this.handleSubmit(event)
      event.preventDefault()
    } else {
    }
  },
  handleChangeOf(attrib) {
    return (event) => this.setState({[attrib]: event.target.value})
  },
  validateThenSubmit(event) {
    event.preventDefault()
    if (this.validateState && !this.validateState()) {
      return
    }
    this.handleSubmit()
  }
});
export default formMixin
