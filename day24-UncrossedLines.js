

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLines = (A, B) => {

    let matrix = matrixBuilder(A.length+1,B.length+1);
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let im = i + 1;
            let jm = j + 1;
            if (A[i] != B[j]) {
                matrix[im][jm] = Math.max(matrix[im - 1][jm], matrix[im][jm - 1]);
            }else{
                matrix[im][jm] = 1+ matrix[im-1][jm-1];
            }
        }
    }
    let iEnd = matrix.length-1;
    let jEnd = matrix[iEnd].length-1;
    return matrix[iEnd][jEnd]

    function matrixBuilder(iSize,jSize){
        let matrix =[];
        let rows = [];
        for(let j=0; j<jSize; j++){
            rows.push(0);
           }

        for(let i=0; i<iSize; i++){
            matrix.push(rows.slice(0));
        }
      return matrix;
    }

};


console.log(maxUncrossedLines([3], [3,3,2]));//1
console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));//2
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]));//3
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]));//2
console.log(maxUncrossedLines([2, 1], [1, 2, 1, 3, 3, 2]));//2
console.log(maxUncrossedLines([1, 1, 2, 1, 2], [1, 3, 2, 3, 1]));//3
console.log(maxUncrossedLines([3, 3, 3, 1], [2, 2, 3, 3]));//2
console.log(maxUncrossedLines([3, 3, 2, 3, 3], [1, 3, 1, 2]));//2
console.log(maxUncrossedLines([2, 3, 3, 2, 1, 2], [2, 3]));//2
console.log(maxUncrossedLines([1, 1, 3, 5, 3, 3, 5, 5, 1, 1], [2, 3, 2, 1, 3, 5, 3, 2, 2, 1]));//5



//1 encontrar todas las linesas
// paso dos quedarme con la linea que tiene menos intersecciones  por cada i
// elegir la linea que tiene menos interseccions o la derecha


