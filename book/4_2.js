const count = (arr) => {
  if (arr.length === 0) {
    return 0
  }
  return 1 + count(arr.slice(1))
}

console.dir(count([9, 2, 3, 3, 1]))