let Bn = require('../Bn')
let Bsn = require('../Bsn')
let bsn = new Bsn(0)
let as = console.assert
bsn.root.left = new Bn(1)
bsn.root.right = new Bn(2)
bsn.root.left.left = new Bn(3)
bsn.root.left.right = new Bn(4)
bsn.root.right.left = new Bn(5)
bsn.root.right.right = new Bn(6)
let result
result = [1, 2, 4, 5, 3, 6, 7]
    as (bsn.toArray('preot', (o)=>o + 1).filter((o, i)=>o !== result[i]).length === 0)
result = [4, 2, 5, 1, 6, 3, 7]
    as (bsn.toArray('Inot', (o)=>o + 1).filter((o, i)=>o !== result[i]).length === 0)
result = [4, 5, 2, 6, 7, 3, 1]
    as (bsn.toArray('postot', (o)=>o + 1).filter((o, i)=>o !== result[i]).length === 0)
result = [1, 2, 3, 4, 5, 6, 7]
    as (bsn.toArray('bfs', (o)=>o + 1).filter((o, i)=>o !== result[i]).length === 0)
