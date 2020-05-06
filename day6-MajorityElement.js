// Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element 
// always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
   let arr =[];
   let MAJORITY = nums.length/2;
   for(let n of nums){
        arr[n] = arr[n]? arr[n]+1: 1;
        if(arr[n] > MAJORITY){
            return n         
        }
    }
};

exports.solution = majorityElement;