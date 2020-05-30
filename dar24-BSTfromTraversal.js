// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = preorder => {
    let size = preorder.length;

    let result = constructTree(preorder, size);

    return result;


    function constructTree(pre, size) {
        return bstBuilder(pre, 0, pre[0], Number.MIN_VALUE, Number.MAX_VALUE, size);
    }

    function bstBuilder(pre, preIndex, key, min, max, size) {

        // Base case  
        if (preIndex >= size) { return null; }

        let root = null;

        // If current element of pre[] is in range, then  
        // only it is part of current subtree  
        if (key > min && key < max) {

            // Allocate memory for root of this subtree 
            // and increment *preIndex  
            root = new TreeNode(key);
            preIndex = preIndex + 1;

            if (preIndex < size) {

                // Construct the subtree under root  
                // All nodes which are in range  
                // {min .. key} will go in left  
                // subtree, and first such node will  
                // be root of left subtree.  
                root.left = bstBuilder(pre, preIndex,
                    pre[preIndex], min, key, size);

                // All nodes which are in range  
                // {key..max} will go in right  
                // subtree, and first such node  
                // will be root of right subtree.  
                root.right = bstBuilder(pre, preIndex,
                    pre[preIndex], key, max, size);
            }
        }

        return root;
    }


};


//bstFromPreorder([8, 5, 1, 7, 10, 12]);
//bstFromPreorder([1,3,2]);
bstFromPreorder([7, 20, 19, 12]);



