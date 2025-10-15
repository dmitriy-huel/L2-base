function bingo(ticket, win){
 let miniWins = 0;
    
    for (let i = 0; i < ticket.length; i++) {
        let [str, num] = ticket[i];
        let found = false;
        
        for (let j = 0; j < str.length; j++) {
            if (str.charCodeAt(j) === num) {
                found = true;
                break;
            }
        }
        
        if (found) {
            miniWins++;
        }
    }
    
    if (miniWins >= win) {
        return 'Winner!';
    } else {
        return 'Loser!';
    }
}


console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));