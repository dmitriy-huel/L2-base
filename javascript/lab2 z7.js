function findMissing(list) {  
  const firstDiff = list[1] - list[0];
    const lastDiff = list[list.length - 1] - list[list.length - 2];
    
    let commonDiff;
    if (Math.abs(firstDiff) <= Math.abs(lastDiff)) {
        commonDiff = firstDiff;
    } else {
        commonDiff = lastDiff;
    }
    
    for (let i = 0; i < list.length - 1; i++) {
        const currentDiff = list[i + 1] - list[i];
        if (Math.abs(currentDiff) > Math.abs(commonDiff)) {
            return list[i] + commonDiff;
        }
    }
}

console.log(findMissing([1, 3, 5, 7, 9, 13]));
console.log(findMissing([10, 20, 30, 50]));
console.log(findMissing([2, 4, 8, 10]));