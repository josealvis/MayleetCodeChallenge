// Given a positive integer, output its complement number. 
// The complement strategy is to flip the bits of its binary representation.
// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), 
// and its complement is 010. So you need to output 2.

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num)=>{
    //find is num is a power of two
    if(!(num & num-1)){
        return num-1;
    }else{
        let  nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log(num)/Math.log(2)));
        return nextPowerOfTwo - num-1;
    }
};


exports.solution = findComplement;