const { solution } = require('./day11-FloodFill');


test('Should be the same', () => {

    let image = [[0,0,0],[0,0,0]]
    let expectArr = [[2,2,2],[2,2,2]]
    let sr = 0, sc = 0, newColor = 2;
    let newArr = solution(image, sr, sc, newColor);

    expect(compareMatrices(image,expectArr)).toBe(true);
});

test('Should be the same', () => {

    let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
    let expectArr = [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
    let sr = 1, sc = 1, newColor = 2;
    let newArr = solution(image, sr, sc, newColor);

    expect(compareMatrices(image,expectArr)).toBe(true);
});


test('Should be the same', () => {

    let image = [[1]]
    let expectArr = [[2]]
    let sr = 0, sc = 0, newColor = 2;
    let newArr = solution(image, sr, sc, newColor);

    expect(compareMatrices(image,expectArr)).toBe(true);
});


test('Should be the same', () => {

    let image = [[0,0,0],[1,0,0]]
    let expectArr = [[0,0,0],[4,0,0]]
    let sr = 1, sc = 0, newColor = 4;
    let newArr = solution(image, sr, sc, newColor);

    expect(compareMatrices(image,expectArr)).toBe(true);
});

test('Should be the same', () => {

    let image = [[3,2,2,3],[3,3,2,2],[0,3,3,1],[0,0,3,3]]
    let expectArr = [[1,2,2,3],[1,1,2,2],[0,1,1,1],[0,0,1,1]]
    let sr = 3, sc = 3, newColor = 1;
    let newArr = solution(image, sr, sc, newColor);
    console.log(image);
    expect(compareMatrices(image,expectArr)).toBe(true);

    image = [[3,2,2,3],[3,3,2,2],[0,3,3,1],[0,0,3,3]]
    expectArr = [[3,5,5,3],[3,3,5,5],[0,3,3,1],[0,0,3,3]]
    sr = 1, sc = 2, newColor = 5;
    newArr = solution(image, sr, sc, newColor);
    console.log(image);
    expect(compareMatrices(image,expectArr)).toBe(true);

});


test('Should be the same', () => {

    let image = [[0,0,0,0],[0,0,0,0]]
    let expectArr = [[0,0,0,0],[0,0,0,0]]
    let sr = 0, sc = 0, newColor = 0;
    let newArr = solution(image, sr, sc, newColor);
    console.log(image);
    expect(compareMatrices(image,expectArr)).toBe(true);

});



function compareMatrices(m1, m2){
    if(m1.length != m2.length) return false;
    if(m1[0].length != m2[0].length) return false;
    for(let j=0; j<m1.length; j++){
       for(let i=0; i<m1.length; i++){
           if(m1[j][i] !=m2[j][i]) return false
       }
    }
    return true;
}