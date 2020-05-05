// Given a string, find the first non-repeating character in 
// it and return it's index. If it doesn't exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
const  firstUniqChar = (s)=>{

    let  mapHash = s.split("").reduce((map,el, i)=>{
        if(map[el]){
            map[el].times= map[el].times+1
        }else{
            map[el]={times:1, index: i};
        }
        return map; 
    },{});

    for(let key in mapHash){
        if(mapHash[key].times ===1){
            return mapHash[key].index;
        }
    }
    return -1;
};



exports.solution =firstUniqChar;