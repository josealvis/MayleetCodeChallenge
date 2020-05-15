// Given a circular array C of integers represented by A, 
// find the maximum possible sum of a non-empty subarray of C.

// Here, a circular array means the end of the array connects to the beginning of the array.  
// (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

// Also, a subarray may only include each element of the fixed buffer A at most once.  
// (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

/**
 * @param {number[]} A
 * @return {number}
 */
//O(n^2)
const maxSubarraySumCircular = (A) => {
    let maximunSum = null;
    let result = {};
    
    for (const startAt in A) {
        let index = Number(startAt);
         let current = { sum: 0, maxSum: A[index], maxSumIndex: index, startIndex: index, subA: [] };
        //let current = { sum: 0, maxSum: A[index] };

        for (let i = 0; i < A.length; i++) {
            current.sum = current.sum + A[index];
            if (current.maxSum < current.sum) {
                current.maxSum = current.sum;
                //current.subA.push(A[index]);
                //current.maxSumIndex = index;
            }else if(current.sum - A[current.startIndex] <= -1*( A[current.startIndex]) ){
                break;
            }
            index++;
            if (index == A.length) index = 0;
        }
        if (maximunSum == null || maximunSum < current.maxSum) {
            maximunSum = current.maxSum;
            result = current;
        }
    }
    return result.maxSum;

};

exports.solution = maxSubarraySumCircular;


