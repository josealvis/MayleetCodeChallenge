// Given a string s and a non-empty string p, find all the start indices of 
// p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both 
// strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//brute force 
let findAnagrams = (s, p) => {
    if (s == p) return [0];
    if (s.length < p.length) return [];
    let result = [];
    for (let x = 0; x < s.length; x++) {
        let sub = s.substr(x, p.length);
        let valid = true;
        for (let l of p) {
            let index = sub.indexOf(l)
            if (index != -1) {
                sub = sub.substring(0, index) + sub.substring(index + 1);
            } else {
                valid = false;
                break;
            }
        }
        if (valid) {
            result.push(x);
        }

    }
    return result;
};

// brute force with some improve
let findAnagrams2 = (s, p) => {
    if (s == p) return [0];
    if (s.length < p.length) return [];
    const mapP = map(p);

    let result = [];
    let nextTrue = false;
    for (let x = 0; x < s.length; x++) {
        let sub = s.substr(x, p.length);
        if (sub.length < p.length) break;
        if (nextTrue || isAnagram(sub, p)) {
            result.push(x);
            if (s[x + p.length] == s[x]) {
                nextTrue = true;
            } else {
                nextTrue = false;
                mapP[s[x + p.length]] == undefined ? x + p.length - 1 : x = x + 1;
            }
        }

    }
    return result;


    function map(text) {
        let count = 0;
        let arr = text.split("").reduce((obj, e) => {
            if (obj[e]) return obj;
            else obj[e] = 0;
            return obj;
        }, {})

        return arr;
    }

    function isAnagram(str1, str2) {
        let count = map(str2);
        for (var i = 0; str1[i] && str2[i]; i++) {
            count[str1[i]]++;
            count[str2[i]]--;
        }

        if (str1[i] || str2[i])
            return false;

        for (let prop in count) {
            if (count[prop]) return false;
        }
        return true;

    }
};



findAnagrams = (s, p) => {
    let mapP = p.split("").reduce((obj, e) => {
        if (obj[e]) obj[e]++;
        else obj[e] = 1;
        return obj;
    }, {});

    let currentMap = { ...mapP };
    let count = p.length;
    let start = 0;
    let end = 0;
    let result = [];

    while (end < s.length) {

        if (end - start >= p.length) start++;
        if (currentMap[s[end]] == undefined) {
            start = end + 1;
            end = start;
            count = p.length;
            currentMap = { ...mapP };
            continue;
        }
        while (currentMap[s[end]] == 0) {
            currentMap[s[start]] = currentMap[s[start]] + 1;
            start++;
            count++;
        }

        currentMap[s[end]] = currentMap[s[end]] - 1;
        count--;

        if (count == 0) {
            result.push(start);
            count++;
            currentMap[s[start]] = currentMap[s[start]] + 1;
            start++;
        }
        end++;
    }

    return result;
};



exports.solution = findAnagrams;