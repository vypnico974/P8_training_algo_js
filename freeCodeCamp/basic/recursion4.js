/**Use Recursion to Create a Range of Numbers
Continuing from the previous challenge, we provide you another opportunity to create
a recursive function to solve a problem.
We have defined a function named rangeOfNumbers with two parameters. The function should return
an array of integers which begins with a number represented by the startNum parameter
and ends with a number represented by the endNum parameter. The starting number will always
be less than or equal to the ending number. Your function must use recursion by calling itself
and not use loops of any kind. It should also work for cases where both startNum
and endNum are the same.*/
// Only change code below this line
function countdown(number, result = []){
  // Ajouter le nombre actuel au tableau
  result.push(number);
  if (number <= 0) {
    return [];
  }

  // Condition de sortie
  if (number === 1)  {
   // console.log("Décompte terminé");
    return result;
  } 

  // Appeler récursivement la fonction avec le nombre précédent
  return countdown(number - 1, result);
}

// Only change code above this line
console.log(countdown(-1))