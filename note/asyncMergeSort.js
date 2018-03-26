module.exports = function asyncMergeSort(arr, callback = r=> r, comparator = (a, b)=>a < b, timer = 0, blockLength = 100) {
  function quickSort(arr, left, right) {
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

    let pivot, partitionIndex
    if (left < right) {
      pivot = right
      partitionIndex = partition(arr, pivot, left, right)
      quickSort(arr, left, partitionIndex - 1)
      quickSort(arr, partitionIndex + 1, right)
    }
    return arr
  }

  function merge(arr, start, mid, end) {

    let helpArray = []
    let a = start, b = mid, index = 0
    let isFinish = false
    if (start === 0 && end === arr.length) {isFinish = true }
    while (a < mid && b < end) {
      helpArray.push(comparator(arr[a], arr[b]) ? arr[a++] : arr[b++])
    }
    while (a < mid) {
      helpArray.push(arr[a++])
    }
    while (b < end) {
      helpArray.push(arr[b++])
    }
    while (start < end) {
      arr[start++] = helpArray[index++]
    }

    if (isFinish) {
      callback(null, arr)
    }
  }

  function mergeSort(arr, start, end) {
    if (end - start > blockLength) {
      let mid = Math.floor(start + (end - start) / 2)
      delay(()=>mergeSort(arr, start, mid), 0)
        .delay(()=>mergeSort(arr, mid, end), 0)
        .delay(()=>merge(arr, start, mid, end), 0)
    }
    else {
      quickSort(arr, start, end - 1)
    }
  }

  mergeSort(arr, 0, arr.length)
  return arr
}

function delay(fn, t) {
  let queue = [], self, timer

  function schedule(fn, t) {
    timer = setTimeout(function () {
      timer = null
      fn()
      if (queue.length) {
        let item = queue.shift()
        schedule(item.fn, item.t)
      }
    }, t)
  }

  self = {
    delay: function (fn, t) {
      if (queue.length || timer) {
        queue.push({fn: fn, t: t})
      } else {
        schedule(fn, t)
      }
      return self
    },
    cancel: function () {
      clearTimeout(timer)
      queue = []
      return self
    }
  }
  return self.delay(fn, t)
}
