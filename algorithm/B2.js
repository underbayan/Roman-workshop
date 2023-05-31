/**
 * @description 支持层次push，层次搜素，中序，后序，前序搜索，子节点父节点双引用
 */
class Node {
  constructor(value, l, r, parent) {
    this.l = l
    this.r = r
    this.value = value
    this.parent = parent
  }
}
class NodeTree {
  constructor(root, v = 0) {
    this.root = root || new Node(v)
  }
  last() {
    let last
    this.level_sr([this.root], (i, l) => {
      if ((!i.l || !i.r) && !last) {
        last = i
      }
    })
    return last
  }
  push(node) {
    let t = this.last()
    if (!t.l) {
      t.l = node
      node.parent = t
    } else if (!t.r) {
      t.r = node
      node.parent = t
    }
  }
  pre_sr(p, deal = _ => _) {
    if (!p) return
    deal(p)
    this.pre_sr(p.l, deal)
    this.pre_sr(p.r, deal)
  }
  left_sr(p, deal = _ => _) {
    if (!p) return
    this.left_sr(p.l, deal)
    deal(p)
    this.left_sr(p.r, deal)
  }
  pos_sr(p, deal = _ => _) {
    if (!p) return
    this.pos_sr(p.l, deal)
    this.pos_sr(p.r, deal)
    deal(p)
  }
  level_sr(q, deal = _ => _) {
    let nq = []
    let level = 1
    q.map(i => {
      deal(i, level++)
      nq.push(i.l, i.r)
    })
    nq = nq.filter(i => i)
    if (nq.length) {
      this.level_sr(nq, deal)
    }
  }
  right_sr(p, deal = _ => _) {
    if (!p) return
    this.right_sr(p.r, deal)
    deal(p)
    this.right_sr(p.l, deal)
  }
}
exports.Node = Node
exports.NodeTree = NodeTree
