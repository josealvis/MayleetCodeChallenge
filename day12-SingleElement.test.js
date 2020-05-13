const {solution}  = require('./day12-SingleElement');

test('',()=>{
    // expect(solution([1,1,2,3,3,4,4,8,8])).toBe(2);
    // expect(solution([3,3,7,7,10,11,11])).toBe(10);
    // expect(solution([])).toBe(0);
    // expect(solution()).toBe(0);
    // expect(solution([1,1,2])).toBe(2);
    // expect(solution([2])).toBe(2);
    // expect(solution([2,1,1,3,3])).toBe(2);
    // expect(solution([1,1,2,2,3,3,4])).toBe(4);
    // expect(solution([1,1,2,2,4,3,3])).toBe(4);
    console.log("arr length = ",[1,1,2,2,3,3,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,20,20,21,21,22,22,4].length)
    expect(solution([1,1,2,2,3,3,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,20,20,21,21,22,22,4])).toBe(4);
});