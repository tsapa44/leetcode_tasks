const _swap = (arr, indexA, indexB) => {
  const temp = arr[indexA]
  arr[indexA] = arr[indexB]
  arr[indexB] = temp
}

const _partition = (arr, low, high) => {
  const pivot = arr[Math.floor((high + low) / 2)]
  let i = low
  let j = high
  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1
    }

    while (arr[j] > pivot) {
      j -= 1
    }

    if (i <= j) {
      _swap(arr, i, j)
      i += 1
      j -= 1
    }
  }

  return i
}

const quickSort = (arr, low, high) => {
  let partitionIndex
  if (arr.length > 1) {
    partitionIndex = _partition(arr, low, high)

    if (low < partitionIndex - 1) {
      quickSort(arr, low, partitionIndex - 1)
    }

    if (high > partitionIndex) {
      quickSort(arr, partitionIndex, high)
    }
  }

  return arr
}

const a = [2, 5, 1, 7, 8, 3, 9]
console.dir(a)
quickSort(a, 0, a.length - 1)
console.dir(a)