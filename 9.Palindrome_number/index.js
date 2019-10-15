/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) { // if x is i.e. 510 (ended on 0)
    return false
  }
  let res = 0
  let num = x
  while (num > res) { // checking only half of number
    res = res * 10 + (num % 10)
    num = Math.floor(num / 10)
  }
  return res === num || Math.floor(res / 10) === num // second condition for odd number
}

console.dir(isPalindrome(1221))
console.dir(isPalindrome(-232))
console.dir(isPalindrome(232))
console.dir(isPalindrome(762))
console.dir(isPalindrome(11))
console.dir(isPalindrome(19291))
