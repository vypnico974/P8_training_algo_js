/**Truncate a String
Truncate a string (first argument) if it is longer than the given maximum
string length (second argument). Return the truncated string with a ... ending. */
function truncateString(str, num) {
    let newStr = '';
    
    if (str.length > num) {
        newStr = str.slice(0, num) + '...';
      } else {
        return str;
      }
    
      return newStr;
    }
    
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
    console.log(
    truncateString("A-tisket a-tasket A green and yellow basket", 
                   "A-tisket a-tasket A green and yellow basket".length));
    console.log(truncateString("A-tisket a-tasket A green and yellow basket",
              "A-tisket a-tasket A green and yellow basket".length + 2))