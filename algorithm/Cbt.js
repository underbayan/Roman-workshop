//Complete Binary Tree
module.exports = class Cbt{
    constructor(fromArray = []) {
        this.data = fromArray
    }

    push(node) {
        this.data.push(node)
    }

    pop() {
        return this.data.pop()
    }

    shift() {
        return this.data.shift()
    }

    last() {
        return this.data.length - 1
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }
    swapNode(index,index1){
        let tmp=this.data[index]
        this.data[index]=this.data[index1]
        this.data[index1]=tmp
    }
    children(index) {
        if (index * 2 + 1 > this.data.length - 1) {return {left: -1, right: -1}}
        if (index * 2 + 2 > this.data.length - 1) {return {left: index * 2 + 1, right: -1}}
        return {left: index * 2 + 1, right: index * 2 + 2}
    }
    getDepth() {
        return Math.floor(Math.log(data.length)) + 1
    }
}