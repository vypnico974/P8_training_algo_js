/**Chunky Monkey
Write a function that splits an array (first argument) into groups the length
of size (second argument) and returns them as a two-dimensional array. */
function chunkArrayInGroups(arr, size) {
    let rsltArray = [];  
    let item = 0;  
    while(item < arr.length) {
      rsltArray.push(arr.slice(item, item += size));
    }
   // console.log("array:" + " " + rsltArray);  
    return rsltArray;  
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));