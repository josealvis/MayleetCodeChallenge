const {solution } = require('./day7-CousinsBinaryTree');

function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

test("root = [1,2,3,null,4,null,5], x = 5, y = 4  should be true",()=>{
    let root = new TreeNode(1,new TreeNode(2, null,new TreeNode(4)),new TreeNode(3, null, new TreeNode(5)));
    console.log("nodedddddd: ", root)
    expect(solution(root,5,4)).toBe(true);
})


