/**  https://www.codingame.com/ide/puzzle/mayan-calculation */
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// var inputs = readline().split(' ');
// const L = parseInt(inputs[0]);
// const H = parseInt(inputs[1]);
// for (let i = 0; i < H; i++) {
//     const numeral = readline();
// }
// const S1 = parseInt(readline());
// for (let i = 0; i < S1; i++) {
//     const num1Line = readline();
// }
// const S2 = parseInt(readline());
// for (let i = 0; i < S2; i++) {
//     const num2Line = readline();
// }
// const operation = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// console.log('result');

const [L, H] = readline().split` `.map(n=>+n);
const numbers = [];

for (let i = 0; i < H; i++) {
    const x = readline();
    
    for (let j = 0; j < 20; j++) {
        numbers[j] = (numbers[j] || '') + x.slice(j * L, (j + 1) * L);
    }
}

const numStr = '0123456789abcdefghij';
const strToNum = (s) => {
    let ss = '';
    for (let i=0; i<s.length/(L*H); i++) {
        ss += numStr[numbers.indexOf(s.slice(i*L*H, (i+1)*(L*H)))];
    }
    return parseInt(ss, 20);
};
const numToStr = num => num.toString(20).split('').map(e => numbers[numStr.indexOf(e)]).join``;


const n1 = strToNum([...Array(+readline())].map( _ => readline()).reduce((sum, a) => sum + a, '' ));
const n2 = strToNum([...Array(+readline())].map( _ => readline()).reduce((sum, a) => sum + a, '' ));

const operation = readline();
const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b | 0,
    };

const result = numToStr(operations[operation](n1, n2));

for (let i = 0; i < result.length / L; i++) {
    console.log(result.slice(i*L, (i+1)*L));
}
