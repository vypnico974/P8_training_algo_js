/**** https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript  *******/


/**** solution  *******/
String.prototype.toAlternatingCase = function() {
    return this.split('').map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        return char.toUpperCase();
      }
      else{
        return char
      }
    }).join('');
  };