/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var res = []
  // nums.sort((a, b) => {
  //   return a - b
  // })
  // console.log(nums)
  for(var i = 0; i < nums.length; i++) {
    for(var k = i + 1; k < nums.length; k++) {
      if(nums[i] + nums[k] == target) {
        res.push(i, k)
      }
    }
  }
  return Array.from(new Set(res))
};

var nums = [3,2,4], target = 6
console.log(twoSum(nums, target))