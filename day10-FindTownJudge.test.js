const {solution} = require('./day10-FindTownJudge');

test('simple test',()=>{
    let N = 2, trust = [[1,2]];
    expect(solution(N,trust)).toBe(2);
    N = 3, trust = [[1,3],[2,3]];
    expect(solution(N,trust)).toBe(3);
    N = 3, trust = [[1,3],[2,3],[3,1]];
    expect(solution(N,trust)).toBe(-1);
    N = 3, trust = [[1,2],[2,3]];
    expect(solution(N,trust)).toBe(-1);
    N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]];
    expect(solution(N,trust)).toBe(3);
    N = 4, trust = [[1,3]];
    expect(solution(N,trust)).toBe(-1);
});

