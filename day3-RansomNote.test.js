const {solution } = require('./day3-RansomNote')


test("Should return false ",()=>{
    expect(solution('a','f')).toBe(false);
} )
test("Should return true",()=>{
    expect(solution('aa','aaa')).toBe(true);
} )
test("Should return false",()=>{
    expect(solution('qaw','oayuhggjhjhq')).toBe(false);
} )
test("Should return true",()=>{
    expect(solution('aaaaeeewwwwwqqqq','aaaaaaaaaaaaeeeeeeeeeeeeewwwwwwwwwwwwwwwwwqqqqqqqqqqqqq')).toBe(true);
} )
test("Should return true",()=>{
    expect(solution('qweqwqqwqwq','qweqweqweqweqweqweqwewqeqweqweqweqweqweqweqweqweqwqqwqwq')).toBe(true);
} )
test("Should return false",()=>{
    expect(solution('wwww','www')).toBe(false);
} )
