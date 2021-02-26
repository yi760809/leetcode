// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function (matrix) {
//   // // 最终返回的结果数组
//   // var ans = []

//   // var spiralLoop = function () {
//   //   // 临时数组
//   //   var arr = []

//   //   for (var i = 0; i < matrix.length; i++) {
//   //     if (i === 0) {
//   //       arr = arr.concat(matrix[0])
//   //     }

//   //     if (i > 0 && i < matrix.length - 1) {
//   //       var insertRight = matrix[0].length === 1 ? [] : arr.splice(-(i - 1), i - 1), // 插入位置右侧的元素
//   //         last = matrix[i].splice(-1, 1), // 数组尾元素
//   //         first = matrix[i].splice(0, 1) // 数组首元素
//   //       // 在指定位置插入元素
//   //       arr = arr.concat(last, first, insertRight)
//   //     }

//   //     if (matrix.length > 1 && i === matrix.length - 1) {
//   //       var insertRight = matrix[0].length === 1 ? [] : arr.splice(-(matrix.length - 2), matrix.length - 2)
//   //       // 将最后一行倒叙排列然后插入指定位置
//   //       arr = arr.concat(matrix[matrix.length - 1].reverse(), insertRight)
//   //     }
//   //   }
//   //   // 删除矩阵的首尾行，得到的就是下一次需要遍历的矩阵
//   //   matrix.splice(0, 1)
//   //   matrix.splice(-1, 1)

//   //   ans = ans.concat(arr)
//   //   // 根据矩阵内是否还存在数组进行递归
//   //   if (matrix.length >= 1) {
//   //     spiralLoop(matrix)
//   //   }
//   // }

//   // spiralLoop(matrix)

//   // return ans

//   let x = 0,
//     y = 0,
//     endX = matrix[0].length, //初始值就是外层横向的数据长度
//     endY = matrix.length,
//     i,
//     total = endX * endY
//   var result = []

//   while (result.length < total) {
//     //上
//     for (i = x; i < endX; i++) {
//       result.push(matrix[x][i])
//     }
//     //右
//     for (i = y + 1; i < endY; i++) {
//       result.push(matrix[i][endX - 1])
//     }

//     //下
//     for (i = endX - 2; i >= x; i--) {
//       result.push(matrix[endY - 1][i])
//     }

//     // //左
//     for (i = endY - 2; i > x; i--) {
//       result.push(matrix[i][x])
//     }

//     x++
//     y++
//     endY--
//     endX--
//   }

//   return result
// }
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var result = []

  var fun = function () {
    var arr = []

    for (var i = 0; i < matrix.length; i++) {
      if (i === 0) {
        arr = arr.concat(matrix[0])
      }

      if (i > 0 && i < matrix.length - 1) {
        var insertRight = matrix[0].length === 1 ? [] : arr.splice(-(i - 1), i - 1), // 插入位置右侧的元素
          last = matrix[i].splice(-1, 1), // 获取数组最后一个
          first = matrix[i].splice(0, 1) // 获取数组第一个
        // 在指定位置插入元素
        arr = arr.concat(last, first, insertRight)
      }

      if (matrix.length > 1 && i === matrix.length - 1) {
        var insertRight = matrix[0].length === 1 ? [] : arr.splice(-(matrix.length - 2), matrix.length - 2)
        // 反转最后一行的数组
        arr = arr.concat(matrix[matrix.length - 1].reverse(), insertRight)
      }
    }
    // 删除矩阵的首尾行，得到的就是下一次需要遍历的矩阵
    matrix.splice(0, 1)
    matrix.splice(-1, 1)

    result = result.concat(arr)
    // 递归
    if (matrix.length >= 1) {
      fun(matrix)
    }
  }

  fun(matrix)

  return result
}

var mn = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]
console.log(spiralOrder(mn))
