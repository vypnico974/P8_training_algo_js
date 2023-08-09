/** https://www.codingame.com/ide/puzzle/scrabble */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// const N = parseInt(readline());
// for (let i = 0; i < N; i++) {
//     const W = readline();
// }
// const LETTERS = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// console.log('invalid word');

const value = {
    e: 1, a: 1, i: 1, o: 1, n: 1, r: 1, t: 1, l: 1, s: 1, u: 1,
    d: 2, g: 2,
    b: 3, c: 3, m: 3, p: 3,
    f: 4, h: 4, v: 4, w: 4, y: 4,
    k: 5,
    j: 8, x: 8,
    q: 10, z: 10
};

const Words = [...Array(+readline())].map(_ => readline());

const LETTERS = readline();

let max = -Infinity;
let word = '';

Words.forEach((w) => {
let sum = 0;
const currentSet = [...LETTERS];
[...w].forEach((currentLetter) => {
    sum += (currentSet.includes(currentLetter))
        ? (currentSet[currentSet.indexOf(currentLetter)] = '', value[currentLetter])
        : -Infinity;
});

sum > max && (word = w, max = sum);
});

console.log(word);
