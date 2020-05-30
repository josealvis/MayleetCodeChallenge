//Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
/**
 * @param {number[]} nums
 * @return {number}
 */
//brute force not working
// const findMaxLength = (nums) => {

//     let maxCounter = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let dynamicCounter = [[1, 0, 0]];
//         let di = 0;
//         let firstInput = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             di++;
//             //increase frist elemento counter
//             if (nums[j] == firstInput)
//                 dynamicCounter.push([dynamicCounter[di - 1][0] + 1, dynamicCounter[di - 1][1]]);
//             //increase second elemento counter
//             else dynamicCounter.push([dynamicCounter[di - 1][0], dynamicCounter[di - 1][1] + 1]);

//             //save the maximun iqual number
//             if (dynamicCounter[di][0] === dynamicCounter[di][1])
//                 dynamicCounter[di][2] = dynamicCounter[di][0];
//             else dynamicCounter[di][2] = dynamicCounter[di - 1][2];
//         }
//         if (dynamicCounter[dynamicCounter.length - 1][2] > maxCounter) {
//             maxCounter = dynamicCounter[dynamicCounter.length - 1][2]
//         }
//     }

//     let result = maxCounter * 2;
//     return result;

// };


const findMaxLength = (nums) => {
    let hasMap = {};
    let count = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] == 0 ? -1 : 1;

        if (count == 0) {
            if (maxLength < i + 1) {
                maxLength = i + 1;
            }
        } else if (hasMap[count] != undefined) {
            if (maxLength < i - hasMap[count]) {
                maxLength = i - hasMap[count]
            }

        } else {
            hasMap[count] = i;
        }
    }

    return maxLength;

};

// console.log(findMaxLength([0, 1, 0]));
// console.log(findMaxLength([0, 1]));
// console.log(findMaxLength([0, 0, 0, 1, 1, 1, 0]));
// console.log(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0]));
// console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));//6
console.log(findMaxLength([0,0,1]));//6



