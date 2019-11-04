/**
 * @param {string} s
 * @return {boolean}
 */

const par = {
  '(': ')',
  '[': ']',
  '{': '}'
}

const isOpen = (char) => char === '(' || char === '[' || char === '{'
const isValid = (s) => {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    if (isOpen(s[i])) {
      arr.push(s[i])
    } else {
      if (par[arr[arr.length - 1]] !== s[i]) {
        return false
      }
      arr.pop()
    }
  }
  return !arr.length
}

console.dir(isValid('()')) // true
console.dir(isValid('()[]{}')) // true
console.dir(isValid('(]')) // false
console.dir(isValid('([)]')) // false
console.dir(isValid('{[]}')) // true
console.dir(isValid('[')) // false
