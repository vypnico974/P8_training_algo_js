/***** Description 
 * https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/solutions/javascript *******/


 function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
   }
   console.log(sameCase('a', 'g')) //1
   console.log(sameCase('A', 'C')) //1
   console.log(sameCase('b', 'G')) //0
   console.log(sameCase('B', 'g')) //0
   console.log(sameCase('0', '?')) //-1