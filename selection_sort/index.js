const selectionSort = (arr) => {
  for (let i = 0; i <= arr.length - 1; i += 1) {
    let minIndex = i
    for (let z = i; z <= arr.length - 1; z += 1) {
      if (arr[minIndex] > arr[z]) {
        minIndex = z
      }
    }
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

console.dir(selectionSort([9, 2, 3, 1, 4, 8, 7, 5, 6]))