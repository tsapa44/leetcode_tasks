/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let num = x
  let result = 0
  let i = num >= 0 ? num.toString().length - 1 : num.toString().length - 2
  while (num !== 0) {
    result += (num % 10) * Math.pow(10, i)
    num = parseInt(num / 10)
    i--
  }

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0
  }
  return result
}
