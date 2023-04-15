class Heap {
  constructor(arr, compareFunc) {
    this.heap = [];
    this.compare = compareFunc || ((a, b) => a < b);
    if (arr && Array.isArray(arr)) {
      this.push(...arr);
    }
  }

  push(...ks) {
    ks.map(k => {
      this.heap.push(k);
      let i = this.heap.length - 1;
      while (i > 0 && this.compare(this.heap[i], this.heap[Math.floor((i - 1) / 2)])) {
        [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [this.heap[Math.floor((i - 1) / 2)], this.heap[i]];
        i = Math.floor((i - 1) / 2);
      }
    })
  }

  heapify(i) {
    let next = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < this.heap.length && this.compare(this.heap[left], this.heap[next])) {
      next = left;
    }
    if (right < this.heap.length && this.compare(this.heap[right], this.heap[next])) {
      next = right;
    }
    if (next !== i) {
      [this.heap[i], this.heap[next]] = [this.heap[next], this.heap[i]];
      this.heapify(next);
    }
  }

  clear() {
    this.heap = []
  }
  get peek() {
    return this.heap[0];
  }
  get size() {
    return this.heap.length
  }

  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapify(0);
    }
    return top;
  }
}

exports.Heap = Heap 