// You are given an array coordinates, coordinates[i] = [x, y], 
// where [x, y] represents the coordinate of a point. 
// Check if these points make a straight line in the XY plane.

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
    let diferencialNumber = diferencial(coordinates[0], coordinates[1]);

    for (let i = 1; i < coordinates.length - 1; i++) {
        if (diferencialNumber !== diferencial(coordinates[i], coordinates[i + 1])) {
            return false;
        }
    }
    return true;

    function diferencial(coordinate1, cordinate2) {
        let dividend = (cordinate2[1] - coordinate1[1]);
        if (dividend !== 0) {
            return (cordinate2[0] - coordinate1[0]) / dividend;
        } else return 1;
    }
};


exports.solution = checkStraightLine;