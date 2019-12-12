const binary_search = (arr, target) => {
  let floor = 0
  let ceiling = arr.length - 1
  while (floor <= ceiling) {
    let mid = Math.ceil((ceiling + floor) / 2)
    if (target !== arr[mid]) {
      if (target > arr[mid]) {
        floor = mid + 1
      } else {
        ceiling = mid - 1
      }
    } else {
      return mid
    }
  }
}

console.dir(binary_search([1, 2, 51, 233, 411], 411))