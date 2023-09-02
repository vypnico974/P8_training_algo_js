/* Instructions
Créez un convertisseur qui prend un nombre décimal saisi par l'utilisateur et affiche
sa représentation binaire. Les codes HTML et CSS vous sont préalablement
fournis, vous devez ainsi mettre en place la fonction JS convertToBinary()
qui permettra la conversion. Analysez bien le code HTML avant de commencer
le développement de la fonction.

Lorsque l'utilisateur entre un nombre décimal et clique sur le bouton "Convertir",
 le nombre doit être converti en binaire.
Affichez le résultat de la conversion binaire sous le champ de saisie.
Informations utiles : Conversion d'un nombre décimal en binaire
La conversion d'un nombre décimal en binaire implique de diviser le nombre décimal
par 2 de manière répétée et de noter les restes à chaque étape. Voici les étapes
générales pour effectuer cette conversion :

Divisez le nombre décimal par 2.
Notez le reste de la division (soit 0 ou 1).
Continuez à diviser le quotient précédent par 2 et notez les restes jusqu'à ce que
le quotienne devient 0.
Les restes notés forment la représentation binaire du nombre décimal, lue de bas en haut.
Par exemple, pour convertir le nombre décimal 10 en binaire :

Étape 1: 10 ÷ 2 = 5, reste 0
Étape 2: 5 ÷ 2 = 2, reste 1
Étape 3: 2 ÷ 2 = 1, reste 0
Étape 4: 1 ÷ 2 = 0, reste 1

En lisant les restes de bas en haut (1010), on obtient la représentation binaire
du nombre décimal 10. */



function convertToBinary(){

    binaryResult="";
    
    // Obtenir le nombre décimal depuis l'entrée
    let decimalInput = document.getElementById("decimalInput").value;
    console.log(isNaN(decimalInput))
    if (isNaN(decimalInput) || decimalInput < 0) {
        binaryResult = "Entrée invalide";
    } else if (decimalInput === 0){ //zéro décimal est égal à zéro binaire
        binaryResult = 0;
    }
    /* solution 1 */
    // Utiliser la méthode toString(2) pour convertir en binaire
    // const binaryResult = (parseInt(decimalInput)).toString(2);
    

    /* solution 2 */
    while (decimalInput > 0) {
        // Divisez le nombre par 2 et ajoutez le reste à la chaîne binaire
        binaryResult = (decimalInput % 2) + binaryResult;
        decimalInput = Math.floor(decimalInput / 2);
    }
   
    // Afficher le résultat
    document.getElementById("binaryResult").textContent = binaryResult;
}