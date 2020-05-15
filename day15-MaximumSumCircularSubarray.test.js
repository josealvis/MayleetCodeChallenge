const { solution } = require('./day15-MaximumSumCircularSubarray');

test('Should work',()=>{
    expect(solution([1,-2,3,-2])).toBe(3);
    expect(solution([5,-3,5])).toBe(10);
    expect(solution([3,-1,2,-1])).toBe(4);
    expect(solution( [3,-2,2,-3])).toBe(3);
    expect(solution( [-2,-3,-1])).toBe(-1);
    expect(solution( [2])).toBe(2);
    expect(solution( [-4])).toBe(-4);
    expect(solution( [-4,5])).toBe(5);
    expect(solution( [4,-5])).toBe(4);
    expect(solution( [0])).toBe(0);
    expect(solution( [0,1,1])).toBe(2);
    expect(solution( [0,-1,1])).toBe(1);
    expect(solution( [1,-1,1])).toBe(2);
    expect(solution( [-1,-1,-1])).toBe(-1);
    expect(solution( [-1,2,-1])).toBe(2);
    expect(solution( [3,-1,2,-1,8,])).toBe(12);
    expect(solution( [3,-2,2,-1,8,])).toBe(12);
});



// Example 1:

// Input: [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3
// Example 2:

// Input: [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10
// Example 3:

// Input: [3,-1,2,-1]
// Output: 4
// Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4
// Example 4:

// Input: [3,-2,2,-3]
// Output: 3
// Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3
// Example 5:

// Input: [-2,-3,-1]
// Output: -1
// Explanation: Subarray [-1] has maximum sum -1
 