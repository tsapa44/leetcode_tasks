const sum = (arr) => {
  if (arr.length === 0) {
    return 0
  }
  return arr.pop() + sum(arr)
}

console.dir(sum([9, 2, 3]))