const {solution } = require('./day4-NumberComplement');


test('',()=>{

    expect(solution(1)).toBe(0);
    expect(solution(4)).toBe(3);
    expect(solution(5)).toBe(2);
    expect(solution(6)).toBe(1);
    expect(solution(7)).toBe(0);
    expect(solution(8)).toBe(7);
    expect(solution(10)).toBe(5);
    expect(solution(890)).toBe(133);
    expect(solution(128)).toBe(127);
    expect(solution(1500)).toBe(547);
})