/*******ROT13 est un chiffrement par substitution qui remplace chaque lettre
 *  de l'alphabet par la lettre située 13 positions plus loin dans l'alphabet.
 *  Pour décrypter un message chiffré avec ROT13, il suffit donc d'appliquer
 *  le même algorithme de substitution, en remplaçant chaque lettre par la lettre
 *  située 13 positions plus tôt dans l'alphabet
*/


/************  solution 1   **********************/
function transformToRot13(stringToTransform){  
  return stringToTransform
        .split('')
        .map( char=> {
              const code = char.charCodeAt(char)
             if (char < 65 || char > 90) {
              return String.fromCharCode(code);
             }  else if (code < 78){   //avance de 13 places      
                    return String.fromCharCode(code + 13);
             } else { // recul de 13 places        
                    return String.fromCharCode(code - 13);
          } }  )
        .join(''); //retransform en string
  
 
}
console.log(transformToRot13('Z')); //HELLO WORLD
console.log(transformToRot13('URYYB JBEYQ')); //HELLO WORLD
console.log(transformToRot13("NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"));


/************  solution 2   
 * Cette fonction prend en entrée une chaîne de caractères chiffrée avec ROT13
 *  et retourne la chaîne de caractères décryptée. Elle utilise une boucle for
 *  pour parcourir chaque caractère de la chaîne, et elle utilise la méthode charCodeAt()
 *  pour obtenir le code ASCII du caractère. Ensuite, elle vérifie si le caractère
 *  est une lettre majuscule ou minuscule en utilisant les plages de codes ASCII 
 * correspondantes (65-90 pour les majuscules, 97-122 pour les minuscules). 
 * Si c'est le cas, elle applique l'algorithme de substitution ROT13 en ajoutant
 *  ou soustrayant 13 au code ASCII de la lettre, en prenant en compte les débordements
 *  d'alphabet. Sinon, elle ajoute simplement le caractère à la chaîne décryptée
 *  telle quelle.
 * **********************/
function decryptRot13(message) {
  let decryptedMessage = '';
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i); // le code ASCII du caractère
    if (charCode >= 65 && charCode <= 90) { //65-90 pour les majuscules
    decryptedMessage += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) { //97-122 pour les minuscules
       decryptedMessage += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
       } else {
       decryptedMessage += message.charAt(i);
       }
    }
  return decryptedMessage;
}
console.log(decryptRot13('Z')); //
console.log(decryptRot13('URYYB JBEYQ')); //HELLO WORLD
console.log(decryptRot13("NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm")); // "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
