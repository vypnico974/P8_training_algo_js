/**** https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript*/

/*Complete the function that takes a sequence of numbers as single parameter.
 Your function must return the sum of the even values of this sequence.
Only numbers without decimals like 4 or 4.0 can be even.
The input is a sequence of numbers: integers and/or floats.
*/

function sumEvenNumbers(inputArray) {
    let result=0;
    inputArray.forEach(element => {
        if (element % 2 === 0){
            result += element;
        }        
        
    });
    return result;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumEvenNumbers([]));