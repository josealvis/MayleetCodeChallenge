// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {

    let nodeX =findNode(root,x);
    let nodeY =findNode(root,y);

    return nodeX.depth === nodeY.depth && nodeX.parent !== nodeY.parent;

    function findNode(root, node, parent =0, depth=0) {
        if (root) {
            if (node == root.val) {
                return {depth,parent,val :root.val};;
            } else {
                let foundNode = findNode(root.left, node,root.val, depth+1);
                if (foundNode == null) {
                    foundNode = findNode(root.right, node, root.val,depth+1);
                }
                return foundNode;
            }
        } else return null;
    
    }
    
};





exports.solution =isCousins;
