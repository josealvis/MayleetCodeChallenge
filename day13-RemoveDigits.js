// Given a non-negative integer num represented as a string, remove k digits 
// from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.
// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, 
// and 2 to form the new number 1219 which is the smallest.
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = (num, k) => {
    let i = -1;
    while (k > 0) {
        i++;
        if (num.length > 1) {
            if (num[i] == 0 || num[i] == num[i + 1] && k < (num.length - 1 - i)) continue;
            if (num[i] <= num[i + 1]) {
                if (num[i + 2] ==undefined || num[i + 1] >= num[i + 2]) {
                    num=  deleteCharAt(num, i + 1)
                }
                else continue;
            }
            else { num = deleteCharAt(num, i); }
        } else return '0';
        k--;
        i=-1;
        //i>=num.length-1?i=-1:i--;
    }
    return trimZero(num);

    
    function trimZero(num) {
        let index = 0;
        if(num[0]!=0) return num;
        for (let i = 0; i < num.length; i++) {
            if (num[i] == 0 && (num[i + 1] > 0  || num[i + 1] == undefined) ) {
                index = i;
                break;
            }
        }
        num = num.substring(index+1);
        return num!=""?num:"0";
    }

    function deleteCharAt(str, index){
        let i = str.length<=index? str.length-1: index;
        return str.substring(0, i) + str.substring(i + 1)
    };
};

exports.solution = removeKdigits;

