/*
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova  
*/

//Variabili
var listOfNames = document.getElementById("names");
var listItems = "";

//Creare array con i cognomi
var list = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

//Chiedere cognome all'utente
do {
    var userName = prompt("Qual è il tuo cognome?").trim().toUpperCase();
}
while (!isNaN(userName));

//Aggiungere il suo cognome alla lista
list.push(userName);

//Ordinare lista alfabeticamnete
list.sort();
console.table(list);

//Stampare array in html
for (i = 0; i < list.length; i++) {
    listItems += "<li>" + list[i] + "</li>";
}

listOfNames.innerHTML = listItems

//Stampare posizione della lista in cui il nuovo utente si trova
var positionNumber = list.indexOf(userName) + 1;
document.getElementById("name-position").innerText = "La posizione dell'utente in lista è: " + positionNumber;
