function hasTwoCubeSums(n) {
	 let found = [];
  
  for (let a = 1; a * a < n; a++){
    let b = Math.round(Math.cbrt(n - a * a * a));
    if (b * b * b + a * a * a === n && b > a){
      found.push([a, b]);
    }
  }
  
  return found.length >= 2;
}
console.log(hasTwoCubeSums(1729));
console.log(hasTwoCubeSums(10));
console.log(hasTwoCubeSums(4104));