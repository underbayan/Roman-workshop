
const assert = require("assert");
const { Heap } = require("./_simple.heap")
test('Heap', () => {
  const heap = new Heap();

  // 1. 构建一个空堆
  expect(heap.heap).toEqual([]);

  // 2. 向堆中添加一个元素
  heap.push(3);
  expect(heap.heap).toEqual([3]);

  // 3. 向堆中添加多个元素
  heap.push(1, 4, 2);
  expect(heap.heap).toEqual([1, 2, 4, 3]);

  // 4. 从堆中删除最小元素
  expect(heap.pop()).toBe(1);
  expect(heap.heap).toEqual([2, 3, 4]);

  // 5. 从堆中删除最大元素
  const maxHeap = new Heap(null, (a, b) => a > b);
  maxHeap.push(3, 1, 4, 2);
  expect(maxHeap.pop()).toBe(4);
  expect(maxHeap.heap).toEqual([3, 2, 1]);

  // 6. 从一个空堆中删除元素
  const emptyHeap = new Heap();
  expect(emptyHeap.pop()).toBeUndefined();

  // 7. 从只有一个元素的堆中删除元素
  const singleHeap = new Heap();
  singleHeap.push(1);
  expect(singleHeap.pop()).toBe(1);
  expect(singleHeap.heap).toEqual([]);

  // 8. 从堆中删除所有元素
  heap.clear();
  expect(heap.heap).toEqual([]);

  // 9. 从已排序的数组构建最小堆
  const sortedArr = [1, 2, 3, 4];
  const sortedHeap = new Heap(sortedArr);
  expect(sortedHeap.heap).toEqual([1, 2, 3, 4]);

  // 10. 从倒序排列的数组构建最小堆
  const reverseArr = [4, 3, 2, 1];
  const reverseHeap = new Heap(reverseArr);
  expect(reverseHeap.heap).toEqual([1, 2, 3, 4]);

  // 11. 从随机排列的数组构建最小堆
  const randomArr = [3, 1, 4, 2];
  const randomHeap = new Heap(randomArr);
  expect(randomHeap.heap).toEqual([1, 2, 4, 3]);

  // 12. 获取最小元素
  expect(heap.peek).toBeUndefined();
  heap.push(3, 1, 4, 2);
  expect(heap.peek).toBe(1);

  // 13. 获取最大元素
  expect(maxHeap.peek).toBe(3);

  // 14. 堆大小
  expect(heap.size).toBe(4);

  heap.clear();
  expect(heap.size).toBe(0);

  // 16. 从一个非数组类型构建最小堆
  const nonArrayHeap = new Heap(3);
  expect(nonArrayHeap.heap).toEqual([]);

  const gg = new Heap(Array(250).fill(1).map(r => ({ v: Math.random() })), (a, b) => a?.v < b?.v)
  let previous = { v: -1 }
  let r = 50
  while (gg.peek) {
    const top = gg.pop()
    const newItem = { v: top.v + Math.random() }
    if (r-- > 0) gg.push(newItem)
    assert(previous.v <= top.v)
    previous = top
  }
});



