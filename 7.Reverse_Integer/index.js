/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let num = x
  let result = 0
  while (num !== 0) {
    result = result * 10 + (num % 10)
    num = parseInt(num / 10)
  }

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0
  }
  return result
}
