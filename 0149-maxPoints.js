/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  var obj = {}
  var newArr = []
  for(var i = 0; i < points.length; i ++) {
    obj[i+1] = points[i][1]
    newArr.push(points[i][1])
    // console.log(obj)
  }
  newArr = Array.from(new Set(newArr))
  console.log(obj, newArr)
};

// var arr = [[4, 3], [1,2], [1,2], [2,3], [3,2], [4, 5]]
var arr = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
console.log(maxPoints(arr))