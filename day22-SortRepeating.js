// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

/**
 * @param {string} s
 * @return {string}
 */
// Time complexity O(n lg n);
const frequencySort = s => {
    let sArray = s.split("");
    //O(n)
    let hash = sArray.reduce((map, char) => {
        if (map[char])map[char]++;
        else map[char] = 1;
        return map;
    }, {});

    let flatS = [];
    //O(n)
    for(let char in hash){
        flatS.push(char);
    }
    //O(n log n)
    let result = mergeSort(flatS, hash).map(el=>{
        let realChar = el;
        // this for is cancel with the reduce map in line 44
        // flatS * hash = n
        // Time complexity  still O(n) 
        for(let x=1; x< hash[el];x++)realChar+=el;
        return realChar;
    }).join("");

    return result;

    function mergeSort(arr, map) {
        // Array of one lemenent is already sort
        if (arr.length < 2) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        const sortedLeft = mergeSort(left, map);
        const sortedRight = mergeSort(right, map);

        const sortedArray = [];
        let currentLeftIndex = 0;
        let currentRightIndex = 0;

        while (sortedArray.length < left.length + right.length) {
            if (currentLeftIndex < left.length &&
                (currentRightIndex === right.length ||
                    map[sortedLeft[currentLeftIndex]] > map[sortedRight[currentRightIndex]])) {
                sortedArray.push(sortedLeft[currentLeftIndex]);
                currentLeftIndex++;
            } else {
                sortedArray.push(sortedRight[currentRightIndex]);
                currentRightIndex++;
            }
        }
        return sortedArray;
    }
};

exports.solution = frequencySort;