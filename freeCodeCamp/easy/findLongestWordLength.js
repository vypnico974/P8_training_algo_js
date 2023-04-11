/**Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number. */
function findLongestWordLength(str) {
    let resultStr='';
    let array = str.split(' ');
    array.forEach(element => {
          if (element.length > resultStr.length) {
              resultStr = element;
          }
      });
      return resultStr.length;
    }

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));