const { solution } = require('./day19-OnlineStockSpan');

test('Should work', () => {
    var obj = new solution();
    expect(obj.next(100)).toBe(1);
    expect(obj.next(80)).toBe(1);
    expect(obj.next(60)).toBe(1);
    expect(obj.next(70)).toBe(2);
    expect(obj.next(60)).toBe(1);
    expect(obj.next(75)).toBe(4);
    expect(obj.next(85)).toBe(6);
});

test('Should work for bad inputs', () => {
    var obj = new solution();
    expect(obj.next(0)).toBe(1);
});