// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example 1:

// Input: 2
// Output: [0,1,1]
// Example 2:

// Input: 5
// Output: [0,1,1,2,1,2]

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    
    let array =  [];
    for(let i =0;i <= num;i++)array.push(i);

    for(let i =1;i <= num;i++)array[i]=array[i-(i & -i)]+1;

    return array;
};


console.log(countBits(5))

//solution https://www.youtube.com/watch?v=awxaRgUB4Kw