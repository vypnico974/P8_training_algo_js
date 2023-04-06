/***   function qui change le sens d'un mot */
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("HeLlo")) ; //// -> "olleh"