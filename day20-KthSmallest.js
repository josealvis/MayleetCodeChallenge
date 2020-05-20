// Given a binary search tree, write a function kthSmallest to find the kth 
// smallest element in it.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
    let currentCount = 0;
    let smallestNode = findElement(root, k);
    return smallestNode != null ? smallestNode.val : null;

    function findElement(node, k) {
        if (node == null) return null;
            var left = findElement(node.left, k);
            if (left != null) return left;

            currentCount++;
            if (currentCount == k) return node;

            return findElement(node.right, k);

    }

};


// let root = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
// //root = [3,1,4,null,2], k = 1

// [3, 1, 4, null, 2]
// 1

// console.log(kthSmallest(root, 3));