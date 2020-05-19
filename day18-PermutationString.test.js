const { solution } = require('./day18-PermutationString');

test('Should work',()=>{
    let  s1 = "ab", s2 = "eidbaooo"
    expect(solution(s1,s2)).toBe(true);

    s1= "ab" ,s2 = "eidboaoo"
    expect(solution(s1,s2)).toBe(false);

    s1= "aba" ,s2 = "eidboaoobaa"
    expect(solution(s1,s2)).toBe(true);

    s1= "abqqqqqqqa" ,s2 = "e"
    expect(solution(s1,s2)).toBe(false);
});

test('big string',()=>{
    const generateText = (m,a)=>{
        let r=a;
        for(let x=0;x<m;x++)r +=a;
        return r;
    }
    let s = generateText(10000,'a');

    let p = generateText(10000,'a');

    expect(solution(s,p)).toBe(true);

});