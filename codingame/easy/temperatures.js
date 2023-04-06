/**** DESCRIPTION
 *  https://www.codingame.com/training/easy/temperatures/  ********/


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let n = parseInt(readline()); // the number of temperatures to analyse
if (n === 0) {
  console.log(0);
} else {
  let temps = readline()
                .split(' ')
                .map(n => parseInt(n, 10)); // the n temperatures expressed as integers ranging from -273 to 5526
  let absTemps = temps.map(n => [Math.abs(n), n]);
  absTemps.sort((array1, array2) => (array1[0] - array2[0]));

  // Print the temperature closest to zero
  if (n !== 1 && absTemps[0][0] === absTemps[1][0])
  console.log(Math.max(absTemps[0][1], absTemps[1][1]));
  else
  console.log(absTemps[0][1]);
}


/******** solution2 
 * La fonction de tri prend une fonction facultative qui définit l’ordre de tri.
 *   La fonction prend deux arguments, appelés ici a et b. 
 *  Si la fonction renvoie un négatif, sort place a avant b. 
 *  Si la fonction renvoie un positif, le tri place b avant a. 
 *  Si la fonction renvoie zéro, a et b sont considérés comme égaux.
*************/

var count = readline(); // the number of temperatures to analyse
var temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526

var sortedTemps = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
printErr(sortedTemps);

var result = sortedTemps[0] || 0;

print(result);