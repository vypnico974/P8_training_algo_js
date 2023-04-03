/****** https://www.codewars.com/kata/55960bbb182094bc4800007b/javascript *****/


function insertDash(num) {
    const numString = num.toString();
    let result = '';
    for (let i = 0; i < numString.length; i++) {
      const currentDigit = parseInt(numString[i]);
      const nextDigit = parseInt(numString[i + 1]);
      if (currentDigit % 2 === 1 && (nextDigit % 2 === 1)) {
        result += currentDigit + '-';
      } else {
        result += currentDigit;
      }
    }
    return result;
}
console.log(insertDash(454793 )); // "4547-9-3"

  
  
  
  
  
  