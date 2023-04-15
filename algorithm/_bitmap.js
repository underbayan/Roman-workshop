class BitMap {
  constructor(max = (1 << 23)) { // 23 => 1mb
    if (max > Math.pow(2, 53) - 1) {
      throw "Out of max range"
    }
    this.buff = new Uint32Array(max / 32)
    this.duplicates = new Set;
  }
  clear() {
    this.duplicates.clear()
    this.buff.fill(null)
  }
  set(index) /** return boolean */ {
    const byteIndex = index >> 5; // 计算字节索引
    const bitIndex = index & 31; // 计算位索引
    if ((this.buff[byteIndex] >> bitIndex) & 1) { return false }
    else {
      this.buff[byteIndex] |= 1 << bitIndex;
      return true
    }
  }
}

exports.BitMap = BitMap


