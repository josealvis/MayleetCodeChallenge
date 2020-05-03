// Given an arbitrary ransom note string and another string containing 
// letters from all the magazines, write a function that will return true 
// if the ransom note can be constructed from the magazines ; otherwise, 
// it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct =(ransomNote, magazine)=> {
    for(let letter of ransomNote ){
        if(magazine.includes(letter)){
            let index = magazine.indexOf(letter);
            magazine = magazine.slice(0,index)+magazine.slice(index+1);
        }else{
            return false;
        }
    }
    return true;
};


exports.solution =canConstruct;



