/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  var arrList = []
  intervals.sort((arr1, arr2) => {
    if (arr1[0] !== arr2[0]) {
      return arr1[0] - arr2[0]
    } else {
      return arr1[1] - arr2[1]
    }
  })
  var arrList = [intervals[0]]
  var contrast = intervals[0]
  for (var i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= contrast[1]) {
      contrast[1] = Math.max(contrast[1], intervals[i][1]);
    } else {
      arrList.push(intervals[i])
      contrast = intervals[i]
    }
  }
  return arrList
}

var intervals = [[1,3],[2,6],[8,10],[15,18]]

console.log(merge(intervals))