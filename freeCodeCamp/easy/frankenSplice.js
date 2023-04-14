/**Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain
the same after the function runs. */
function frankenSplice(array1, array2, index) {
    // Vérifier si l'index est valide
    if (index < 0 || index > array2.length) {
      throw new Error("L'index est invalide");
    }
  
    // Créer une copy du premier tableau pour éviter de modifier l'original
    const copyArray1 = array1.slice();
  
    // Insérer chaque élément de la copy du premier tableau dans le deuxième tableau à l'index spécifié
    for (let i = 0; i < copyArray1.length; i++) {
      array2.splice(index + i, 0, copyArray1[i]);
    }
      return array2;
  }
console.log(frankenSplice(["claw", "tentacle"], 
                          ["head", "shoulders", "knees", "toes"], 1));