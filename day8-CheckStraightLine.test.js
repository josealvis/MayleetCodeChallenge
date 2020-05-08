const { solution } = require('./day8-CheckStraightLine');
//linear funtions
const Y_2X = x => 2*x;
const Y_Xplus2 = x => x + 2;
const Y_4 = x => 4;
//cuadratic functions
const Y_XupTo2 = x => x ** 2;
const Y_XupTo2plusX = x => (x ** 2) + x;


function generateCoordenates(xfn, i=0, length = 10,) {
    let coordinates =[];
    for (i = 0; i<length; i++) {
        coordinates.push([i,xfn(i)]);
    }
    return coordinates;
}


test("should be true", () => {
    let coordinates = [[1, -2], [3, -2], [6, -2], [20, -2]];
    expect(solution(coordinates)).toBe(true);
    coordinates = [[0, 0], [1, 1], [2, 2], [4, 4]];
    expect(solution(coordinates)).toBe(true);
    coordinates = [[-1, -2], [0, 0], [1, 2], [2, 4], [3, 6]];
    expect(solution(coordinates)).toBe(true);
    coordinates = [[2, -2], [2, 0], [2, 2], [2, 4], [2, 8]];
    expect(solution(coordinates)).toBe(true);
})


test("should be false", () => {
    let coordinates = [[1, 1], [2, 4], [3, 9], [4, 16]];
    expect(solution(coordinates)).toBe(false);
    coordinates = [[1, 1], [2, 4], [3, 6], [7, 7]];
    expect(solution(coordinates)).toBe(false);

})

test("Generated tests", () => {
    //linear
    let linearCoordinates = generateCoordenates(Y_2X);
    expect(solution(linearCoordinates)).toBe(true);
    linearCoordinates = generateCoordenates(Y_Xplus2,-5);
    expect(solution(linearCoordinates)).toBe(true);
    linearCoordinates = generateCoordenates(Y_4);
    expect(solution(linearCoordinates)).toBe(true);

    //cuadratics
    let cuadraticsCoordinates = generateCoordenates(Y_XupTo2);
    expect(solution(cuadraticsCoordinates)).toBe(false);
    cuadraticsCoordinates = generateCoordenates(Y_XupTo2plusX);
    expect(solution(cuadraticsCoordinates)).toBe(false);
    cuadraticsCoordinates = generateCoordenates(Y_XupTo2plusX,-4);
    expect(solution(cuadraticsCoordinates)).toBe(false);

})


