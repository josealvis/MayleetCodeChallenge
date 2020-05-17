const {solution } = require('./day17-FindAnagramsString');

test('Should work',()=>{
    expect(solution("baa", "aa").toString()).toBe('1');
    expect(solution("cbaebabacd", "abc").toString()).toBe('0,6');
    expect(solution("abab", "ab").toString()).toBe('0,1,2');
    expect(solution("abab", "ab").toString()).toBe('0,1,2');
    expect(solution("af", "be").toString()).toBe('');
    expect(solution("abacbabc", "abc").toString()).toBe('1,2,3,5');
    expect(solution("aaaaaaaaaaa", "aaaaaaaaaa").toString()).toBe('0,1');

});





test('big work',()=>{
    const generateText = (m,a)=>{
        let r=a;
        for(let x=0;x<m;x++)r +=a;
        return r;
    }
    let s = generateText(20090,'a');

    let p = generateText(20099,'a');

    expect(solution(s,p).length).toBe(0);

});

test('big work',()=>{
    const generateText = (m,a)=>{
        let r=a;
        for(let x=0;x<m;x++)r +=a;
        return r;
    }
    let s = generateText(20099,'a');

    let p = generateText(1000,'a');

    expect(solution(s,p).length).toBe(19100);

});