// Sélection de l'élément <ul> pour afficher les résultats
const ulElement = document.getElementById("result");

//définir le nombre de début et le nombre de fin 
const startNumber = 1
const endNumber = 10

// Boucle pour afficher les nombres pairs entre le nombre de début et le nombre de fin
for (let i = startNumber; i <= endNumber; i++) {
    //si nombre pair
    if (i % 2 === 0) {
    // Création d'un élément <li> pour chaque nombre pair
    const liElement = document.createElement("li");
    liElement.textContent = i;

    // Ajout de l'élément <li> à la liste non ordonnée
    ulElement.appendChild(liElement);
    }
}
