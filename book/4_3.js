const max = (arr) => {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1]
  }
  const sub_max = max(arr.slice(1))
  return arr[0] > sub_max ? arr[0] : sub_max
}

console.dir(max([2, 8, 3, 5]))
