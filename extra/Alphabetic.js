var reconstruct_alphabet = function (words) {
    let result = [];
    // Put your code here
    let alphabet = "";
    words = words.sort((a,b)=> a.length > b.length);

    while (words[0].length>0) {
        words.forEach((w, i) => {

            if (w[0]!=undefined && !alphabet.includes(w[0])) {
            
                    alphabet = alphabet + w[0];
                
            }
            words[i] = words[i].substring(1)
        })
    }



    console.log(alphabet);
    result = [alphabet];


    // Return the result, do not change the structure
    return result;
};


reconstruct_alphabet(['ccda', 'ccb', 'cd', 'a', 'ab', 'd']);
console.log('ok')