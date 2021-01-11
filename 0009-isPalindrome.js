/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false
  x = x.toString()
  var str1 = x
  var str2 = x.split('').reverse().join('');
  // for(var i = x.length; i >= 0; i --) {
  //   str2 += x.charAt(i)
  // }
  if(str1 === str2) {
    return true
  }else {
    return false
  }
};

console.log(isPalindrome(1234321))