/**Title Case a Sentence
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words
like the and of. */
function titleCase(str) {
    // Parcourir chaque mot et mettre la première lettre en majuscule
    const strMaj = str.split(' ').map(word => {
      // Vérifier si le mot n'est pas vide
      if (word.length > 0) {
      // Mettre la première lettre en majuscule et concaténer avec le reste du mot en minuscules
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word; // Retourner le mot tel quel si vide
      }
    });
  
    // Joindre les mots avec des espaces pour former la nouvelle chaîne de caractères
    const newStr = strMaj.join(' ');
  
    return newStr;
  }
  
  console.log(titleCase("I'm a little tea pot"));
