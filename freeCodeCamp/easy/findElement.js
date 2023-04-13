
/**Finders Keepers
Create a function that looks through an array arr and returns the first element
 in it that passes a 'truth test'. This means that given an element x, 
 the 'truth test' is passed if func(x) is true. If no element passes the test,
 return undefined. */
function findElement(arr, func) {
    let result = undefined;
     arr.forEach(element => {
     //  console.log(element);
         if(func(element) && (result == undefined)){
           result = element;
         }
     });
      return result;  
    }


function findElement2(tableau, func) {
    for (let i = 0; i < tableau.length; i++) {
      if (func(tableau[i])) {
        return tableau[i];
      }
    }
    return undefined;
  }  
    console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
    console.log(findElement2([1, 2, 3, 4], num => num % 2 === 0));


/**
 * Note : Il n'existe aucun moyen d'arrêter une boucle forEach en dehors de lever
 *  une exception. Si vous avez besoin d'arrêter la boucle, étudiez plutôt :
Une boucle for classique
Une boucle for...in ou for...of
 */