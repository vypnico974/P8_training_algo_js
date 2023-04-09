/****https://www.codewars.com/kata/541db50c259d9c55c00007b9/train/javascript  */


String.prototype.toBase64 = function() {

      // Convertir la chaîne en une séquence de bytes
  let bytes = new TextEncoder().encode(this);

  // Créer un tableau pour stocker les caractères encodés en Base64
  let encodedChars = [];

  // Parcourir chaque groupe de 3 bytes, les convertir en 4 caractères Base64, et les ajouter au tableau
  for (let i = 0; i < bytes.length; i += 3) {
    let byte1 = bytes[i];
    let byte2 = bytes[i + 1];
    let byte3 = bytes[i + 2];

    let char1 = byte1 >> 2;
    let char2 = ((byte1 & 3) << 4) | (byte2 >> 4);
    let char3 = ((byte2 & 15) << 2) | (byte3 >> 6);
    let char4 = byte3 & 63;

    encodedChars.push(encodeBase64Char(char1));
    encodedChars.push(encodeBase64Char(char2));
    encodedChars.push(encodeBase64Char(char3));
    encodedChars.push(encodeBase64Char(char4));
  }

  // Ajouter des caractères de padding si nécessaire
  let padding = (3 - (bytes.length % 3)) % 3;
  for (let i = 0; i < padding; i++) {
    encodedChars[encodedChars.length - 1 - i] = "=";
  }

  // Convertir le tableau en une chaîne de caractères et la retourner
  return encodedChars.join("");
}

// Fonction auxiliaire pour encoder un caractère Base64
function encodeBase64Char(char) {
  if (char < 26) {
    return String.fromCharCode(char + 65);
  } else if (char < 52) {
    return String.fromCharCode(char + 71);
  } else if (char < 62) {
    return String.fromCharCode(char - 4);
  } else if (char == 62) {
    return "+";
  } else {
    return "/";
  }  
}

// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();