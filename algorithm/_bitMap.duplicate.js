function findDuplicates(arr) {
  const bitmap = Buffer.alloc((1 << 29) / 8, 0);
  const duplicates = new Set;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const index = num + (1 << 28); // 将负数转为正数的索引

    const byteIndex = index >> 3; // 计算字节索引
    const bitIndex = index & 7; // 计算位索引

    if ((bitmap[byteIndex] >> bitIndex) & 1) {
      duplicates.add(num);
    } else {
      bitmap[byteIndex] |= 1 << bitIndex;
    }
  }

  return duplicates;
}
// console.log(findDuplicates([0, 0, 1, 1, 12, 2, 2, 2, 2, 3, 4, 4, 13, 13, 15, 15, 16, 16, 234, 234, 256, 256, 511, 511, 512, 512]))