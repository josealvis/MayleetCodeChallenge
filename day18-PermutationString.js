// Given two strings s1 and s2, write a function to return true 
// if s2 contains the permutation of s1. In other words, one of 
// the first string's permutations is the substring of the second string.

// Example 1:

// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False


// Note:

// The input strings only contain lower case letters.
// The length of both given strings is in range [1, 10,000].

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {

    let s1Map = s1.split("").reduce((obj, e) => {
        if (obj[e]) obj[e]++;
        else obj[e] = 1;
        return obj;
    }, {})
    let currentMap = { ...s1Map };
    let currentbalance = s1.length;
    let start = 0;
    let end = start;

    while (end < s2.length) {
        if (end - start >= s1.length) start++;
        if (currentMap[s2[end]] == undefined) {
            end++;
            start = end;
            currentbalance = s1.length;
            currentMap = { ...s1Map };;
            continue;
        }
        while (currentMap[s2[end]] == 0) {
            currentMap[s2[start]] = currentMap[s2[start]] + 1;
            start++;
            currentbalance++;
        }

        currentMap[s2[end]] = currentMap[s2[end]] - 1;
        currentbalance--;

        if (currentbalance == 0) {
            return true;
        }
        end++;

    }
    return false;
};

exports.solution = checkInclusion;