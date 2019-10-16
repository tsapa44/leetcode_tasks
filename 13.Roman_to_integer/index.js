/**
 * @param {string} s
 * @return {number}
 */
const obj = {
  'MMM': 3000,
  'MM': 2000,
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'CCC': 300,
  'CC': 200,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'XXX': 30,
  'XX': 20,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'III': 3,
  'II': 2,
  'I': 1
}

const romanRegexp = /(M{0,3})?(CM)?(D)?(CD)?(C{0,3})?(XC)?(L)?(XL)?(X{0,3})?(IX)?(V)?(IV)?(I{0,3})?/g
const romanToInt = (s) => {
  const match = romanRegexp.exec(s)
  romanRegexp.lastIndex = 0
  return match.reduce((acc, cur, i) => {
    if (i === 0) {
      return 0
    }
    return cur ? acc + obj[cur] || 0 : acc
  }, 0)
}

console.dir(romanToInt('MCMXCIV'))
console.dir(romanToInt('IV'))
