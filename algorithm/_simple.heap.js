// Following implement is not right
// class FixedSizeMinHeap {
//   constructor(size) {
//     this.size = size;
//     this.heap = new Array(size).fill(Number.MAX_SAFE_INTEGER);
//     this.count = 0;
//   }

//   // 上浮操作
//   bubbleUp(index) {
//     const parentIndex = Math.floor((index - 1) / 2);
//     while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
//       [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//       index = parentIndex;
//       parentIndex = Math.floor((index - 1) / 2);
//     }
//   }

//   // 下沉操作
//   bubbleDown(index) {
//     let childIndex = 2 * index + 1;
//     while (childIndex < this.count) {
//       if (childIndex + 1 < this.count && this.heap[childIndex + 1] < this.heap[childIndex]) {
//         childIndex++;
//       }
//       if (this.heap[index] <= this.heap[childIndex]) {
//         break;
//       }
//       [this.heap[index], this.heap[childIndex]] = [this.heap[childIndex], this.heap[index]];
//       index = childIndex;
//       childIndex = 2 * index + 1;
//     }
//   }

//   // 插入元素
//   insert(value) {
//     if (this.count < this.size) {
//       this.heap[this.count] = value;
//       this.bubbleUp(this.count);
//       this.count++;
//     } else if (value < this.heap[0]) {
//       this.heap[0] = value;
//       this.bubbleDown(0);
//     }
//   }

//   // 获取堆顶元素
//   getMin() {
//     return this.heap[0];
//   }
// }
