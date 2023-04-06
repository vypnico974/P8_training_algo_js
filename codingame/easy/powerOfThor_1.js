/**** DESCRIPTION
 * https://www.codingame.com/training/easy/power-of-thor-episode-1/  ******/


/******* solution 1 ********/
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

var thorX = initialTX;
var thorY = initialTY;

// game loop
while (true) {
    var remainingTurns = parseInt(readline());

    var directionX = "";
    var directionY = "";
    
    if (thorX > lightX) {
        directionX = "W";
        thorX--;
    } else if (thorX < lightX) {
        directionX = "E";
        thorX++;
    }

    if (thorY > lightY) {
        directionY = "N";
        thorY--;
    } else if (thorY < lightY){
        directionY = "S";
        thorY++;
    }    

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    console.log(directionY + directionX); // A single line providing the move to be made: N NE E SE S SW W or NW
}


/******* solution 2 ********/
const inputs = readline().split(' ');
const light = { x: parseInt(inputs[0]), y: parseInt(inputs[1]) };
const thor = { x: parseInt(inputs[2]), y: parseInt(inputs[3]) };

// game loop
while (true) {
    let direction = "";
	if ( thor.y < light.y ) { direction += "S"; thor.y++; }
    if ( thor.y > light.y ) { direction += "N"; thor.y--; }
    if ( thor.x < light.x ) { direction += "E"; thor.x++; }
    if ( thor.x > light.x ) { direction += "W"; thor.x--; }

	console.log(direction);
}