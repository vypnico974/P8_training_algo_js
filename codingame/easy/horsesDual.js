/*** https://www.codingame.com/training/easy/horse-racing-duals */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// const N = parseInt(readline());
// for (let i = 0; i < N; i++) {
//     const pi = parseInt(readline());
// }

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');

// console.log('answer');

let nbHorses = parseInt(readline()); // number of horses
let strengths = []; // the strengths of each horse
let minDiff = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < nbHorses; ++i)
  strengths.push(parseInt(readline()));

// Sort the array to easily find the minimum difference
strengths.sort((strength1, strength2) => (strength1 - strength2));

for (let i = 0; i < (nbHorses - 1); ++i) {
  let difference = strengths[i + 1] - strengths[i];
  minDiff = Math.min(minDiff, difference);
}

console.log(minDiff);



/*** solution 2 optimisé */

console.log(
    [...Array(+readline())] // set up an array with the first input 
    //(which is the number of horses as a string and casting in to int)
    // as it size, as a result we get an array of undefined values
    .map(() => +readline()) // add each element of the input (after the size) as ints
    .sort((a, b) => a - b) // sort the array ascendingly
    .reduce((p, c, i, a) => Math.min(c - a[i - 1], p)) 
    // find the min difference between each couple of consecutive values
  );
  
