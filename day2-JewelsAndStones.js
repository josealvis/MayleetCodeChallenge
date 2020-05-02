// // You're given strings J representing the types of stones that are jewels,
//  and S representing the stones you have.  Each character in S is a type of stone you have. 
//   You want to know how many of the stones you have are also jewels.

// // The letters in J are guaranteed distinct, and all characters in J and S are letters. 
// // Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
exports.solution = numJewelsInStonesSolution1 = function(J, S) {
   let count =0;
   for(x=0; x<S.length; x++){
       if(J.includes(S[x]))count++;
   }
   return count;
    
};


exports.solution2 = numJewelsInStonesSoliction2 = function (J, S) {

    let arrJSort = J.split("").sort();
    let arrSSort = S.split("").sort();
    let jMapHash = arrJSort.reduce((hash, el) => {
        hash[el] = true;
        return hash;
    }, {});

    let count = 0;
    let last = false;

    for (let x = 0; x < arrSSort.length; x++) {
        let s = arrSSort[x];
        if (jMapHash[s]) {
            count++
            arrJSort[arrJSort.length - 1] == s ? last = true : last = false;
        }
        else {
            if (last) break;
        }
    }
    return count;
};


exports.solution3 =  numJewelsInStonesSoliction3 = function (J, S) {

    let count = 0;
    let jMapHash = J.split("").reduce((hash, el) => {
        hash[el] = true;
        return hash;
    }, {});

    S.split("").map(s=>{
        if (jMapHash[s]) count++;
    })

    return count;
};