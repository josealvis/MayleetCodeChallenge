// Given two lists of closed intervals, each list of intervals 
// is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// (Formally, a closed interval [a, b] (with a <= b) denotes the 
// set of real numbers x with a <= x <= b.  The intersection of 
// two closed intervals is a set of real numbers that is either 
// empty, or can be represented as a closed interval.  For example, 
// the intersection of [1, 3] and [2, 4] is [2, 3].)


/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
//O(n)
const intervalIntersection = (A, B) => {
    let start = 0;
    let end = 0;
    let currentA = 0;
    let currentB = 0;
    let result = [];

    while (currentA < A.length && currentB < B.length) {
        if (A[currentA][0] >= B[currentB][0]) {
            //check if A[n].start is inside B[n]
            start = A[currentA][0];
            if (isInside(start, B[currentB])) {
                end = takeSmallest(A[currentA][1], B[currentB][1]);
            } else {
                currentB++;
                continue;
            }
        } else {
            start = B[currentB][0];
            if (isInside(start, A[currentA])) {
                end = takeSmallest(A[currentA][1], B[currentB][1]);
            } else {
                currentA++;
                continue;
            }
        }
        //push intersection
        result.push([start, end]);
        end == A[currentA][1] ? currentA++ : currentB++;
    }

    return result;

    function isInside(number, interval) { return number >= interval[0] && number <= interval[1]; }
    function takeSmallest(a, b) { return a <= b ? a : b; }
};


exports.solution = intervalIntersection;