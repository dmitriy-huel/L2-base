function primeFactors(n){
   let result = "";
    let num = n;
    
    for (let factor = 2; factor <= num; factor++) {
        let count = 0;
        
        while (num % factor === 0) {
            count++;
            num = num / factor;
        }
        
        if (count > 0) {
            if (count === 1) {
                result += "(" + factor + ")";
            } else {
                result += "(" + factor + "**" + count + ")";
            }
        }

        if (num === 1) break;
    }
    
    return result;
}

console.log(primeFactors(10));
console.log(primeFactors(17));
console.log(primeFactors(8));
console.log(primeFactors(100));