// You are given a sorted array consisting of only 
// integers where every element appears exactly twice, 
// except for one element which appears exactly once. 
// Find this single element that appears only once.

// Example 1:

// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: [3,3,7,7,10,11,11]
// Output: 10


// Note: Your solution should run in O(log n) time and O(1) space.


/**
 * @param {number[]} nums
 * @return {number}
 */
//solution 1 O (n log(n))
const singleNonDuplicate1 = (nums) => {
    if (nums == undefined || nums.length == 0) return 0;
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    let c = 0;

    while (left < right) {
        c++;
        mid = Math.floor((left + right) / 2);
        if (left == mid) {
            if (nums[left] == nums[left - 1]) {
                left = mid + 1;
                right = nums.length - 1;
            } else {
                console.log("iteratios: " + c)
                return nums[left];
            }
        }
        if (nums[left] == nums[mid]) {
            left = mid + 1;
            right = nums.length - 1;
        }
        else {
            right = mid;
        }
    }
    console.log("iteratios: " + c)
    return nums[left];
};

//solution 2 O n/2 == n;
const singleNonDuplicate = (nums) => {
    if (nums == undefined || nums.length == 0) return 0;
    let start = 0;
    let c = 0;
    while (start < nums.length) {
        c++;
        if (nums[start] == nums[start + 1]) {
            start = start + 2;
        } else {
            console.log("iteratios: " + c)
            return nums[start];
        }
    }
    console.log("iteratios: " + c)
    return nums[start - 1]
};

//O log(n)
var singleNonDuplicate3 = function (nums) {

    if (nums.length === 0) {
        return 0
    }

    function binarySearch() {
        let start = 0
        let end = nums.length
        let c = 0;
        while (start <= end) {
            c++;
            let middle = Math.floor((start + end) / 2)

            if (nums[middle + 1] === nums[middle]) {
                if (middle % 2 === 0) {
                    start = middle + 1
                }
                else {
                    end = middle
                }
            }
            else if (nums[middle - 1] === nums[middle]) {
                if (middle % 2 === 0) {
                    end = middle
                }
                else {
                    start = middle + 1
                }
            }
            else {
                console.log("iteratios: " + c)
                return nums[middle]
            }
        }
        console.log("iteratios: " + c)
        return -1
    }

    return binarySearch()
};

exports.solution = singleNonDuplicate3;