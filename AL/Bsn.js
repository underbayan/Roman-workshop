let Bn = require('./Bn')
module.exports = class Bsn {
    constructor(root) {
        if (root instanceof Bsn) {
            this.root = root
        }
        else {
            this.root = new Bn(root)
        }
    }

    //Breadth First Search
    bfs(node, Fun) {
        let queue = [node]
        while (queue.length) {
            let currentNode = queue.shift()
            Fun(currentNode)
            currentNode.left && queue.push(currentNode.left)
            currentNode.right && queue.push(currentNode.right)
        }
    }

    //Depth First Search
    //Pre-Order Traversal
    preot(node, Fun) {
        Fun(node)

        node.left && this.preot(node.left, Fun)
        node.right && this.preot(node.right, Fun)
    }

    //In-Order Traversal
    Inot(node, Fun) {
        node.left && this.Inot(node.left, Fun)
        Fun(node)
        node.right && this.Inot(node.right, Fun)
    }

    //Post-Order Traversal
    postot(node, Fun) {
        node.left && this.postot(node.left, Fun)
        node.right && this.postot(node.right, Fun)
        Fun(node)
    }

    toArray(type, Fun) {
        let result = []
        let Funfill = Fun || function (o) {return o.value}
        let newFun = (o)=> {
            result.push(Funfill(o.value))
        }
        switch (type) {
            case 'preot':
                this.preot(this.root, newFun)
                break
            case 'Inot':
                this.Inot(this.root, newFun)
                break
            case 'postot':
                this.postot(this.root, newFun)
                break
            case 'bfs':
                this.bfs(this.root, newFun)
                break
        }
        return result
    }
}
