/**Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i]. */
function largestOfFour(arr) {
    let arrMax = [];
    let i = 0;
    arr.forEach(elementArray => {
        let min = -1000000000000;
         elementArray.forEach(ele =>{
            if (ele > min) {
                min = ele;
            }
          i++;
        } ); 
      arrMax.push(min);
    });
    return arrMax;  
  }
  
  console.log(
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39],
                   [1000, 1001, 857, 1]]));




/** solution 2 */
function largestOfFour(arr) {

    let arrMax = [];
  
    for (let i = 0; i < arr.length; i++) {
  
      let max = 0;
  
      for (let x = 0; x < arr[i].length; x++) {
        if (arr[i][x] > max) {
          max = arr[i][x];
        }
      }
  
      arrMax.push(max);
    }
  
    return arrMax;
  
  }
  