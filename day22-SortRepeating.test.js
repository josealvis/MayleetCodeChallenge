const { solution } = require('./day22-SortRepeating');


test('Should Work',()=>{
    expect(solution("tree").substring(0,2)).toBe("ee");
    let result = solution("cccaaa");
    expect(result == "cccaaa" || result == "aaaccc").toBe(true);
    expect(solution("Aabb").substring(0,2)).toBe("bb");
    expect(solution("loveleetcode")).toBe("eeeeoolldctv");
});