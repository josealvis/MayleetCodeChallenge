const {solution} = require('./day5-FirstUniqueCharacter');


test("", ()=>{
    expect(solution('lwefwwerfdwererwerwererwrrwer')).toBe(0);
    expect(solution('aaaeeeeeeeeeeerrrrrrrrrrrccccccccck')).toBe('aaaeeeeeeeeeeerrrrrrrrrrrccccccccck'.length-1);
    expect(solution('aaaeeeeeeeeeeerrrrrrrrrrrccccccccckk')).toBe(-1);
})