const {solution} = require('./day6-MajorityElement');


test("Mayority", ()=>{
    expect(solution([2,2,1,1,1,2,2])).toBe(2);
    expect(solution([3,1,3])).toBe(3);
})