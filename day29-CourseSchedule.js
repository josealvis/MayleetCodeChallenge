/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 //topological sort
 // https://www.youtube.com/watch?v=0LjVxtLnNOk
const canFinish = (numCourses, prerequisites) => {

    let inDedree = [];
    let count = 0;
    for (let x = 0; x < numCourses; x++) inDedree.push(0);

    for (let i = 0; i < prerequisites.length; i++) {
        inDedree[prerequisites[i][0]]++;
    }

    let stack = [];

    for (let i = 0; i < inDedree.length; i++) {
        if (inDedree[i] == 0) {
            stack.push(i);
        }
    }

    while (!stack.length == 0) {
        let curr = stack.pop();
        count++;

        for (let i = 0; i < prerequisites.length; i++) {
            if (prerequisites[i][1] == curr) {
                inDedree[prerequisites[i][0]]--;
                if (inDedree[prerequisites[i][0]] == 0) {
                    stack.push(prerequisites[i][0]);
                }
            }
        }
    }

    return count === numCourses;

};