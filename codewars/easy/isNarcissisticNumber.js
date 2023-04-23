/***** Description 
 * https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
 * 
 * A Narcissistic Number (or Armstrong Number) is a positive number which is the sum
 *  of its own digits, each raised to the power of the number of digits in a given base.
 *  In this Kata, we will restrict ourselves to decimal (base 10). * 
 *  *******/

function isNarcissisticNumber(number) {
    // convertir le nombre en tableau de chiffres
    const arrayDigits = number.toString().split(''); 
    const numDigits = arrayDigits.length; // trouver le nombre de chiffres
    let sum = 0;
    arrayDigits.forEach(digit => {
        // ajouter la puissance du chiffre au total
        sum += Math.pow(parseInt(digit), numDigits); 
    });
    return sum === number; // renvoyer vrai si la somme est égale au nombre d'origine
}

console.log(isNarcissisticNumber(153));  //true
console.log(isNarcissisticNumber(1938)); //false


/***** solution 2 */
function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
      return p + Math.pow(c, ('' + value).length)
      }, 0) == value;
  }



// function isNarcissisticNumber(number) {
//     const digits = number.toString().split(''); // convertir le nombre en tableau de chiffres
//     const numDigits = digits.length; // trouver le nombre de chiffres
//     let sum = 0;
//     for (let digit of digits) {
//       sum += Math.pow(parseInt(digit), numDigits); // ajouter la puissance du chiffre au total
//     }
//     return sum === number; // renvoyer vrai si la somme est égale au nombre d'origine
// }