// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = (matrix) => {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] == 1 && i > 0 && j > 0) {
                matrix[i][j] = 1+ Math.min(matrix[i-1][j-1], matrix[i-1][j],matrix[i][j-1]);
            }
            count+= matrix[i][j];
        }
    }

    return count;
};

//27+12+3 =
let matrix =
    [[1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
    ]

// matrix =
//     [[1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1]
//     ]
//Output: 7


// matrix =
//     [[1, 1, 1, 1],
//      [0, 1, 1, 1],
//      [1, 1, 1, 1],
//      [1, 1, 1, 1],
//     ]

console.log(countSquares(matrix));

exports.solution = countSquares;