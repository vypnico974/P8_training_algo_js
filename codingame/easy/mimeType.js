/** https://www.codingame.com/ide/puzzle/mime-type */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// Write an answer using console.log()
// To debug: console.error('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
//console.log('UNKNOWN');

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

let types = new Map();

for (let i = 0; i < N; i++) {
    const [extension, mime] = readline().split(' ');
    types.set(extension.toLowerCase(), mime);
}

for (let i = 0; i < Q; i++) {
    let fileName = readline().toLowerCase();
    if (fileName.indexOf`.` > -1) {
        const fileType = fileName.split`.`.pop();
        console.log((types.has(fileType) ? types.get(fileType) : `UNKNOWN`));
    }
    else {
        console.log(`UNKNOWN`);
    }
}

