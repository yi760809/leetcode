/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  var arr = new Array(ratings.length).fill(1)
  for(var i = 0; i < ratings.length; i ++) {
    if(ratings[i] > ratings[i-1]) {
      arr[i] = arr[i-1] + 1
    }
  }
  for(var i = ratings.length - 1; i >=0; i --) {
    if(ratings[i] < ratings[i-1]) {
      arr[i-1] = Math.max(arr[i] + 1, arr[i - 1]);
    }
  }
  var sum = 0
  arr.forEach(item => {
    sum += item
  })
  return sum
};

var t = [1,2,3,2,5,6]
console.log(candy(t))