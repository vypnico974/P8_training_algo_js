/** description
 * https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
 * Given a number n, return the number of positive odd numbers below n, EASY!
 * Examples (Input -> Output)
 * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
 * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
*/
// solution A
function countOddNumbers(n) {
    let count = 0;
    for (let i = 1; i < n; i += 2) {
      count++;
    }
    return count;
  }
  
  console.log(countOddNumbers(15023));
  console.log(countOddNumbers(15));

// solution B
function countOddNumbers(n) {
    return Math.floor(n/2);
}
