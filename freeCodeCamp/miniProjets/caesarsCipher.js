/**Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a 
shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
 Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
 (i.e. spaces, punctuation), but do pass them on. */
 function rot13(texte, decalage) { //chiffrementCesar
    if (!decalage){ decalage = 13;}
    // Vérifier que le décalage est un nombre entier positif ou négatif
    if (!Number.isInteger(decalage)) {
      throw new Error("Le décalage doit être un nombre entier.");
    }
    // Convertir le décalage en valeur entre 0 et 25 pour simplifier les calculs
    decalage = ((decalage % 26) + 26) % 26;
   // console.log(decalage)
    let texteChiffre = "";
    for (let i = 0; i < texte.length; i++) {
     // let char = texte[i];
      let code = texte.charCodeAt(i);
  
      // Vérifier si le caractère est une lettre majuscule (code ASCII entre 65 et 90)
      if (code >= 65 && code <= 90) {
        // Chiffrer le caractère majuscule en appliquant le décalage
        code = ((code - 65 + decalage) % 26) + 65;
      }
      // Vérifier si le caractère est une lettre minuscule (code ASCII entre 97 et 122)
      else if (code >= 97 && code <= 122) {
        // Chiffrer le caractère minuscule en appliquant le décalage
        code = ((code - 97 + decalage) % 26) + 97;
      }
  
      texteChiffre += String.fromCharCode(code);
    }
  
    return texteChiffre;
  }
  
  console.log(rot13("SERR PBQR PNZC"));