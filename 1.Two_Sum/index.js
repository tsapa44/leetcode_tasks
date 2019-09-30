/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum_1 = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let y = i + 1; y < nums.length; y += 1) {
      if (nums[i] + nums[y] === target) {
        return [i, y]
      }
    }
  }
}

const twoSum = (nums, target) => {
  const obj = {}

  for (let i = 0; i < nums.length; i += 1) {
    if (Number.isInteger(obj[nums[i]])) {
      return [obj[nums[i]], i]
    }
    obj[target - nums[i]] = i
  }
}
