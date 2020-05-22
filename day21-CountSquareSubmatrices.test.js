const { solution } = require('./day21-CountSquareSubmatrices');

test('Should work', () => {

    let matrix =
        [[1, 1, 1],
        [1, 1, 1],
        ]
    expect(solution(matrix)).toBe(8);


    matrix =
        [[1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        ]
    expect(solution(matrix)).toBe(14);

    matrix =
        [[1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1]
        ]
    expect(solution(matrix)).toBe(70);

    matrix =
        [[1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1]
        ]

    expect(solution(matrix)).toBe(42);


    matrix =
        [
            [1, 1, 1, 1, 1, 1, 0],
            [1, 0, 1, 1, 1, 1, 0],
            [1, 0, 0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ]

    expect(solution(matrix)).toBe(45);

    matrix =
    [
        [1, 1, 1, 1, 1, 1, 0],
        [1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ]

expect(solution(matrix)).toBe(46);


});