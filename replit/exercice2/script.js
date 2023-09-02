/* Créez une fonction JavaScript appelée calculate qui prend deux nombres et
un opérateur en tant que paramètres (+, -, *, /). La fonction doit effectuer
l'opération mathématique correspondante (addition, soustraction, multiplication
ou division) et retourner le résultat.
Aidez-vous des exemples fournis dans le code de départ pour identifier toutes les
possibilités.
Si vous avez des difficultés, vous pouvez vous référer à la partie 2 du cours
Apprenez à programmer avec JavaScript et les chapitres Découvrez les structures
conditionnelles et Ajoutez une boucle du cours Découvrez le fonctionnement des
algorithmes.  */
// Créez votre fonction ici
 
// Exemples d'utilisation de la fonction
// console.log(calculate(5, 3, '+'));   // Affiche 8
// console.log(calculate(10, 4, '-'));  // Affiche 6
// console.log(calculate(7, 2, '*'));   // Affiche 14
// console.log(calculate(12, 3, '/'));  // Affiche 4
// console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
// console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

function calculate(number1, number2, operator) {
    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            if (number2 === 0) {
                return "Division by zero is not allowed";
            }
            return number1 / number2;
        default:
            return "Invalid operator.";
    }
}

function calculation() {
    // Obtenir les valeurs des nombres et de l'opérateur depuis les champs de saisie
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;

    // Appeler la fonction calculate et afficher le résultat
    const resultElement = document.getElementById("result");
    const result = calculate(number1, number2, operator);
    resultElement.textContent = result;
}





