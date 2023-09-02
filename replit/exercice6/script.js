// Sélectionner l'élément d'affichage (input)
const display = document.getElementById("display");

// Fonction pour ajouter du texte à l'affichage
function appendToDisplay(text) {
    display.value += text;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    display.value = "";
}

// Fonction pour calculer le résultat
function calculateResult() {
    try {
        // eval() pour évaluer l'expression mathématique
        const result = eval(display.value);
        console.log(result)
         console.log(result)
        if (result === Infinity)  {
            display.value = "Désolé... Nous ne pouvons pas diviser par zéro";
        } else if (typeof result !== "number") {
            display.value = "Err.";
        } else  {
            display.value = result;
        }
    } catch (error) {
        // Gérer les erreurs d'évaluation ici (par exemple, division par zéro)
          display.value = "Le résultat est indéfini";
    }
}




