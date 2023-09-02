// Créez votre fonction ici
 
// Exemples d'utilisation de la fonction
// console.log(calculateAverage([5, 10, 15])) // retourne 10
// console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
// console.log(calculateAverage()) // No numbers to calculate average


function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

function displayAverage() {
    // Obtenir les nombres depuis le champ de saisie et les convertir en tableau
    const numberInput = document.getElementById("numberInput").value;
    const numbers = numberInput.split(",").map(function (number) {
      //  console.log(parseFloat(number.trim()), "OK")
        return parseFloat(number.trim());
    });
  

    // Appeler la fonction calculateAverage et afficher le résultat
    const resultElement = document.getElementById("result");
    const result = calculateAverage(numbers);
    console.log(typeof result)
    resultElement.textContent = result;
    if (resultElement.textContent === "NaN"){
        return resultElement.textContent ="No numbers to calculate average.";
    }
}
