/* Une page HTML contient un bouton avec le texte Cliquez ici. Lorsque l'utilisateur
clique sur le bouton, affichez un message Bonjour, vous avez cliqué sur le bouton !
dans la console.
Vous devez mettre en place un observateur d’événement dans le fichier script.js
afin d’afficher le message Bonjour, vous avez cliqué sur le bouton ! lors du clic.
Si vous avez des difficultés, vous pouvez vous référer au chapitre Interagissez
avec un élément d’une page web grâce aux événements du cours Apprenez à programmer
avec JavaScript. */
// Sélectionnez le bouton par son ID
const buttonElement = document.getElementById("myButton");

// Ajoutez un observateur d'événement pour le clic
buttonElement.addEventListener("click", function () {
    console.log("Bonjour, vous avez cliqué sur le bouton !");
});