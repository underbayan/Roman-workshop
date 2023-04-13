
/** Arr.length >100000
 * -2^28 < arr[i] < 2^28
 */
function findDuplicates(arr) {
  const bitmap = Buffer.alloc(1 << 29 / 8, 0);
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const index = num + (1 << 28); // 将负数转为正数的索引

    const byteIndex = index >> 3; // 计算字节索引
    const bitIndex = index & 7; // 计算位索引

    if ((bitmap[byteIndex] >> bitIndex) & 1) {
      duplicates.push(num);
    } else {
      bitmap[byteIndex] |= 1 << bitIndex;
    }
  }

  return duplicates;
}