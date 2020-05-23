const { solution } = require('./day23-IntervalListIntersections');

test('Should Work', () => {
    let A = [[0, 2], [5, 10], [13, 23], [24, 25]], B = [[1, 5], [8, 12], [15, 24], [25, 26]]
    let expected = [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
    let result = solution(A, B);
    expect(compareResults(result,expected)).toBe(true);
});


test('Should Work', () => {
    let A = [[0, 1]], B = [[1, 5], [8, 12], [15, 24], [25, 26]]
    let expected = [[1,1]]
    let result = solution(A, B);
    expect(compareResults(result,expected)).toBe(true);
});


test('Should Work', () => {
    let A = [[0, 1]], B = [ [8, 12], [15, 24], [25, 26]]
    let expected = [];
    let result = solution(A, B);
    expect(compareResults(result,expected)).toBe(true);
});

test('Should Work', () => {
    let A = [], B = []
    let expected = []
    let result = solution(A, B);
    expect(compareResults(result,expected)).toBe(true);
});

test('Should Work', () => {
    let A = [[1,1]], B = [[0,1],[2,3]]
    let expected = [1,1]
    let result = solution(A, B);
    expect(compareResults(result,expected)).toBe(true);
});

test('Should Work', () => {
    let A = [[3,5]], B = [[0,1],[2,3]]
    let expected = [3,3]
    let result = solution(A, B);
    expect(compareResults(result,expected)).toBe(true);
});


test('Should Work', () => {
    let A = [[1,1]], B = [[2,3],[6,8]]
    let expected = [3,3]
    let result = solution(A, B);
    expect(compareResults(result,expected)).toBe(false);
});

function compareResults(A, B) {
    if (A.length != B.length) return false;

    for (let i = 0; i < A.length; i++) {
        if (!(A[i][0] == B[i][0] && A[i][1] == B[i][1])) return false;
    }
    return true;
}