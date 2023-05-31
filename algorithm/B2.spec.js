/* Testing for B2*/
let as = console.assert
const { Node, NodeTree } = require('./B2.js')
const t = new NodeTree(null, 1)

const origin = [2, 3, 4, 5, 6, 7]
origin.map(i => t.push(new Node(i)))

let result = []
t.pre_sr(t.root, _ => result.push(_.value))
as(result.filter((o, i) => o !== [1, 2, 4, 5, 3, 6, 7][i]).length === 0)
console.log(result)
result = []
t.pos_sr(t.root, _ => result.push(_.value))
as(result.filter((o, i) => o !== [4, 5, 2, 6, 7, 3, 1][i]).length === 0)
console.log(result)
result = []
t.level_sr([t.root], _ => result.push(_.value))
as(result.filter((o, i) => o !== [1, 2, 3, 4, 5, 6, 7][i]).length === 0)
console.log(result)

result = []
t.left_sr(t.root, _ => result.push(_.value))
as(result.filter((o, i) => o !== [4, 2, 5, 1, 6, 3, 7][i]).length === 0)
console.log(result)

result = []
t.right_sr(t.root, _ => result.push(_.value))
as(result.filter((o, i) => o !== [7, 3, 6, 1, 5, 2, 4][i]).length === 0)
console.log(result)
