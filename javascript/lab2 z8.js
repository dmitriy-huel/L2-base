function whatCentury(year)
{
  let century = Math.ceil(year / 100);
    let lastDigit = century % 10;
    let lastTwoDigits = century % 100;
    
    if (lastDigit === 1 && lastTwoDigits !== 11) return century + "st";
    if (lastDigit === 2 && lastTwoDigits !== 12) return century + "nd";
    if (lastDigit === 3 && lastTwoDigits !== 13) return century + "rd";
    return century + "th";
}
console.log(whatCentury("1999"));
console.log(whatCentury("2011"));
console.log(whatCentury("2154"));
console.log(whatCentury("2259"));
console.log(whatCentury("1124"));
console.log(whatCentury("2000"));