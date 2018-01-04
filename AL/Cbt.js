//Complete Binary Tree
import Bsn from './Bsn'
export default class Cbt extends Bsn {
    constructor(fromArray = []) {
        super()
        this.data = fromArray
    }
    push(node) {
        this.data.push(node)
    }
    shift(node) {
        this.data.push(node)
    }
}