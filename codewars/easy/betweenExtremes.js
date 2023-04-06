/*** https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript */

function betweenExtremes(numbers) {
    let min = 0
    let max = 0
    let preview = 0
      //write your code here
     numbers.forEach(number => { 
         if (preview === 0) {
           min = number;      
           max = number; }    
         if (number > max) { 
           max = number; 
         } else if (number < min) {
           min = number; }
         preview++; });
    return ( max - min)
  }  
  console.log(betweenExtremes([23, 3, 19, 21, 16])) //20
  console.log(betweenExtremes([1, 434, 555, 34, 112])) //554