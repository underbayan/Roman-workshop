#!/usr/bin/env node
'use strict'
let Bn = require('./Bn')
let Bsn = require('./Bsn')
let bsn = new Bsn(0)
let l=console.log
bsn.root.left = new Bn(1)
bsn.root.right = new Bn(2)
bsn.root.left.left=new Bn(3)
bsn.root.left.right=new Bn(4)
bsn.root.right.left=new Bn(5)
bsn.root.right.right=new Bn(6)
l(bsn.toArray('preot',(o)=>o+1).map((o)=>(o)),
bsn.toArray('Inot',(o)=>o+1).map((o)=>(o)),
bsn.toArray('postot',(o)=>o+1).map((o)=>(o)),
bsn.toArray('bfs',(o)=>o+1).map((o)=>(o)))

