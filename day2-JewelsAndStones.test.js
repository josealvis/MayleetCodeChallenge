const {solution, solution2, solution3} = require('./day2-JewelsAndStones')

let jewels=[];
beforeEach(() => {

    jewels =['azZJc','qqqqqqqqqqqqqqqqqqqqqqaaaakiKzeeeeeeeeeeeeeeeeeeeeeeJJJJJqqqqqqQQQQQQccazqqqqqqqqqqqq']//14
 
});
test("Solucion 1",()=>{
    expect(solution(...jewels)).toBe(14);
})
test("Solucion 2",()=>{
    expect(solution2(...jewels)).toBe(14);
})
test("Solucion 3",()=>{
    expect(solution3(...jewels)).toBe(14);
})
