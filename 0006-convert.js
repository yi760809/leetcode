/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  var arr = new Array(numRows)
  if(numRows == 1) return s
  for(var j = 0; j < arr.length; j ++) {
    arr[j] = ''
  }
  var arrIndex = 0
  var flag = false
  var str = s
  for (var i = 0; i < str.length; i++) {
    arr[arrIndex] += str[i]
    // console.log(arr)
    if (arrIndex === 0 || arrIndex === numRows - 1) {
      flag = !flag
    }
    arrIndex += flag ? 1 : -1
  }
  let res = ""
  for (let i = 0; i < arr.length; i++) {
    let tmpStr = arr[i]
    res += tmpStr
  }
  return res
}