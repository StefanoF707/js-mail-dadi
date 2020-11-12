// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato

// chiedere l'email all'utente
var userEmail = prompt("Prego inserisca la sua email:");

// creare una lista di mail
var mailList = ["first.mail@gmail.com", "second.mail@gmail.com", "third.mail@gmail.com", "fourth.mail@gmail.com"];

// navigare nella array delle mail per cercare la corrispondenza
var result = false;
for (var i = 0; i < mailList.length; i++) {
     if (userEmail === mailList[i]) {
          result = true;
     }
}

// se l'email è nella lista consentire l'accesso, altrimenti negare
if (result === true) {
     document.getElementById("access").innerHTML = "Accesso consentito!";
} else {
     document.getElementById("access").innerHTML = "Accesso negato!";
}
