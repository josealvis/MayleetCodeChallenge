const { solution } = require('./day9-ValidPerfectSquare');

test("Should work",()=>{
    expect(solution(16)).toBe(true);
    expect(solution(14)).toBe(false);
    expect(solution(8)).toBe(true);
})
