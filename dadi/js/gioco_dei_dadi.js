// Gioco dei dadi, chi fa di più vince.
// Generare un numero random da 1 a 6, sia per il
// giocatore sia per il compute. Stabilire il
// vincitore, in base a chi fa il punteggio più alto.

// creazione numero randomico giocatore 1
var humanPlayer = Math.floor((Math.random() * 6) + 1);
// console.log(humanPlayer);
document.getElementById("human").innerHTML = humanPlayer;

// creazione numero randomico giocatore 2
var computerPlayer = Math.floor((Math.random() * 6) + 1);
// console.log(computerPlayer);
document.getElementById("computer").innerHTML = computerPlayer;

// determinare il vincitore
if (humanPlayer > computerPlayer) {
     document.getElementById("winner").innerHTML = "Human Player!"
} else if (humanPlayer < computerPlayer) {
     document.getElementById("winner").innerHTML = "Computer Player!"
} else {
     document.getElementById("winner").innerHTML = "Draw!"
}
