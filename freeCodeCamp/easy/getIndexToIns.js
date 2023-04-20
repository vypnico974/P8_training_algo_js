/**Where do I Belong
Return the lowest index at which a value (second argument)
 should be inserted into an array (first argument) once it has been sorted.
  The returned value should be a number. */
function getIndexToIns(arr, num) {
  let index = 0;
  let array = arr.sort((a, b) => a - b) ;
  while (index < array.length && array[index] < num) {
    index++;
  }
  return index;
}

console.log(getIndexToIns([40, 60, 30], 50));
console.log(getIndexToIns([40, 60, 30], 10));