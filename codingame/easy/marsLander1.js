/******* https://www.codingame.com/training/easy/mars-lander-episode-1 */

const surfaceN = parseInt(readline());
for (let i = 0; i < surfaceN; ++i) {
  readline();
}

// game loop
while (true) {
  let inputs = readline().split(' ');
  let vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
//   let power = 0;
//   let angle = 0;
//   if (vSpeed <= -40) {
//     power = 4;
//   }
//   console.log(`${angle} ${power}`);
power = (vSpeed <= -40) ? 4 : 0
 console.log(`0 ${power}`);
}