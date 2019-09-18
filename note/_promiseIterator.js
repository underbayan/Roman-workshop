class PromiseIterator {
  constructor(iterable) {
    this.iterator = iterable[Symbol.iterator]();
  }
  next() {
    return Promise.resolve(this.iterator.next())
  }
}
class PromiseIterable {
  constructor(iterable) {
    this[Symbol.iterator] = iterable[Symbol.iterator]
  }
}
