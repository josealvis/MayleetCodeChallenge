//Experimental test
const complexityCalculator = (n, iterationsWorstCase)=>{
    if(iterationsWorstCase > 2**n) return "O(n!)";
    if(iterationsWorstCase <= 2**n && iterationsWorstCase > n**2) return "O(n^2)";
    if(iterationsWorstCase <= n**2 && iterationsWorstCase > n*Math.ceil(Math.log2(n))) return "O(n^2)";
    if(iterationsWorstCase <= n*Math.ceil(Math.log2(n)) && iterationsWorstCase > n) return "O{n log(n)}";
    if(iterationsWorstCase <= n && iterationsWorstCase > Math.ceil(Math.log2(n))) return "O(n)";
    if(iterationsWorstCase <= Math.ceil(Math.log2(n)) && iterationsWorstCase > 1) return "O{log(n)}";
    if(iterationsWorstCase == 1) return "O(1)";  
    return "NA";
}

exports.complexityCalculator = complexityCalculator;