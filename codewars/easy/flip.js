/****** DESCRIPTION
 * https://www.codewars.com/kata/5f70c883e10f9e0001c89673/ *******/


const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

let a = [1, 4, 5, 3, 5 ];
let d = 'L';
console.log(flip(d,a)) //[5, 5, 4, 3, 1]
a = [3, 2, 1, 2] ;
d = 'R';
console.log(flip(d,a)) //[1, 2, 2, 3]