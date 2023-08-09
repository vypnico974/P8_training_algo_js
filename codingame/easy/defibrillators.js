/** https://github.com/a-merezhanyi/codingame/blob/master/(easy)%20Defibrillators.js */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// const LON = readline();
// const LAT = readline();
// const N = parseInt(readline());
// for (let i = 0; i < N; i++) {
//     const DEFIB = readline();
// }

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

//console.log('answer');
const longtitudeA = parseFloat(readline().replace(',', '.'));
const latitudeA = parseFloat(readline().replace(',', '.'));
const N = parseInt(readline());
let defibs = [];
let minDestination = Infinity;
let nearestPoint = -1;
let x = 0;
let y = 0;
let d = 0;
let longtitudeB = 0;
let latitudeB = 0;

for (let i = 0; i < N; i++) {
    defibs[i] = readline().split(';');
    defibs[i][4] = parseFloat(defibs[i][4].replace(',', '.'));
    defibs[i][5] = parseFloat(defibs[i][5].replace(',', '.'));
    
    longtitudeB = defibs[i][4];
    latitudeB = defibs[i][5];
    x = (longtitudeB - longtitudeA) * Math.cos((latitudeA + latitudeB)/2);
    y = latitudeB - latitudeA;
    d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
    
    if (d < minDestination) {
        minDestination = d;
        nearestPoint = i;
    }
    console.error(`${i}: ${x}, ${y}, ${d}, ${minDestination}, ${nearestPoint}`);
}

console.log(defibs[nearestPoint][1]);