/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefixHorizontal = strs => {
  if (strs.length === 0) {
    return ''
  }
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
    }
  }
  return prefix
}

const longestCommonPrefix = strs => {
  if (strs.length === 0) {
    return ''
  }
  for (let i = 0; i < strs[0].length; i++) { // run on letters
    const char = strs[0][i]
    for (let z = 1; z < strs.length; z++) { // run on words
      if (strs[z].length === i || char !== strs[z][i]) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0]
}

console.dir(longestCommonPrefix(['flower', 'flow', 'flight']))
console.dir(longestCommonPrefix(['dog', 'racecar', 'car']))
