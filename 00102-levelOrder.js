/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  var arr = [root]
  var res = []
  while (arr.length) {
    var level = []
    var len = arr.length
    for (var i = 0; i < len; i++) {
      var currentNode = arr.shift()
      level.push(currentNode.val)
      if (currentNode.left !== null) {
        arr.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        arr.push(currentNode.right)
      }
    }
    res.push(level)
  }
  return res
}