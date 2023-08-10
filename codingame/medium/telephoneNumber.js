/** https://www.codingame.com/ide/puzzle/telephone-numbers */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// const N = parseInt(readline());
// for (let i = 0; i < N; i++) {
//     const telephone = readline();
// }

// Write an answer using console.log()
// To debug: console.error('Debug messages...');


// The number of elements (referencing a number) stored in the structure.
// console.log('number');

const telephone = Array.from({length: +readline()}, readline).sort();
//console.log(telephone)
let num = telephone[0].length;

for (let i = 1; i < telephone.length; i++) {
    let result = 0;
    const arr1 = telephone[i - 1];
    const arr2 = telephone[i];
    // console.log( arr1 + " " + arr2 )
    const diff = arr2.length - arr1.length;
    const max = arr2.length - diff;
   
        
    
    (diff !== 0) && (result += diff);
    
    for (let j = 0; j < max; j++) {
        if (arr1[j] != arr2[j]) {
            result += max - j;
          //  console.log(result)
            break;
        }
    }
    num += result;
}

// The number of elements (referencing a number) stored in the structure.
console.log(num);
