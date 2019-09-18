let Cbt = require('./Cbt')
module.exports = class Heap extends Cbt {
    constructor(dataArray, compareFun) {
        super(dataArray)
        if (compareFun instanceof Function) {
            this.compare = compareFun
        }
        if(dataArray){
            dataArray.map(o=>this.push(o))
        }
    }

    push(node) {
        let current = this.last() + 1
        this.data.push(node)
        let parent = this.parent(current)
        while (~parent && !this.compare(this.data[parent], this.data[current])) {
            this.swapNode(current, parent)
            current = parent
            parent = this.parent(current)
        }
    }

    shift() {
        let last = this.data.pop()
        let result = this.data[0]
        if (result !== undefined) {
            this.data[0] = last
            let current = 0;
            let next = this.getNext(current)
            while (~next && !this.compare(this.data[current], this.data[next])) {
                this.swapNode(current, next)
                current = next
                next = this.getNext(current)
            }
            return result
        }
        return last
    }

    getNext(current) {
        let d = this.children(current)
        if (~d.right) {
            return this.compare(this.data[d.right], this.data[d.left]) ? d.right : d.left
        } else if (~d.left) {
            return d.left
        } else {return -1}
    }

    compare() {
        return 1
    }

}