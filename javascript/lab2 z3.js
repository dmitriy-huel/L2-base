function expandedForm(num) {
 let numStr = num.toString();
    let result = [];
    
    for (let i = 0; i < numStr.length; i++) {

        if (numStr[i] !== '0') {
            let zeros = '0'.repeat(numStr.length - i - 1);
            result.push(numStr[i] + zeros);
        }
    }
    
    return result.join(' + ');
}

console.log(expandedForm(12));
console.log(expandedForm(45));
console.log(expandedForm(70304));