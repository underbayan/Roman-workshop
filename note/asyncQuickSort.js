module.exports = function asyncQuickSort(arr, callback = r=>r, comparator = (a, b)=>a < b, timer = 0, blockLength = 1000) {
  let _flag = 1
  function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot], partitionIndex = left, temp
    for (let i = left; i < right; i++) {
      if (comparator(arr[i], pivotValue)) {
        temp = arr[i]
        arr[i] = arr[partitionIndex]
        arr[partitionIndex] = temp
        partitionIndex++
      }
    }
    temp = arr[right]
    arr[right] = arr[partitionIndex]
    arr[partitionIndex] = temp
    return partitionIndex
  }

  function quickSort(arr, left, right) {
    let pivot, partitionIndex
    if (left < right) {
      _flag++
      pivot = right
      partitionIndex = partition(arr, pivot, left, right)
      if (right - left > blockLength) {
        setTimeout(()=>quickSort(arr, left, partitionIndex - 1, callback), timer)
        setTimeout(()=>quickSort(arr, partitionIndex + 1, right, callback), timer)
      }
      else {
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
      }
    }
    else {
      _flag--
      if (!_flag) {
        _flag = 1
        callback()
      }
    }
  }
  quickSort(arr, 0, arr.length - 1)
}



