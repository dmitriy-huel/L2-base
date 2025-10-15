function wave(str){
 let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        
        let waveStr = '';
        for (let j = 0; j < str.length; j++) {
            if (j === i) {
                waveStr += str[j].toUpperCase();
            } else {
                waveStr += str[j];
            }
        }
        
        result.push(waveStr);
    }
    
    return result;
}

console.log(wave("hello"));
console.log(wave(" s p a c e s "));