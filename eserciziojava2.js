//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 55;
let numero2 = 34;

if(numero1 >= 50){
    console.log("Stampa il numero maggiore")
}else if (numero2 >= 50){
    console.log("Stampa numero minore")
}else{
    console.log("Non stampare nulla")
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 3;
if(num <= 5){
console.log("Tiny")
}else{
    console.log("non mostrare Tiny")
}

let num1 = 9;
if(num1 <= 10){
    console.log("Small")
}else{
    console.log("non mostrare Small")
}

let num2 = 12;
if(num2 <= 15){
    console.log("Medium")
}else{
    console.log("Non mostrare nulla")
}

let num3 = 18;
if(num3 <= 20){
    console.log("Large")
}else{
    console.log("Non mostrare Large")
}

let num4 = 93;
if(num4 >= 20){
    console.log("Huge")
}else{
    console.log("Non mostrare Huge")
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*for(let i = 0 ; i < 11; i++){
    if( i !== 3 && i !== 8){
     }else{
        continue
    }
    console.log(i)
} */

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*for(let i = 0; i<16 ; i++){
 if(i %2 === 0){
    console.log("numero pari")
 }
 else{
    console.log("numero dispari")
 }
} */


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numerin = 2;
let numerino = 6;
if(numerin + numerino === 8){
    console.log(8)
}else{
    console.log("nulla")
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/



let totalShoppingCart = 160;
let costoSpedizione = 10;

if(totalShoppingCart >= 50){
    let totale = totalShoppingCart;
    console.log("Spedizione gratuita")
}else{
    let totale1 = totalShoppingCart + costoSpedizione;

    console.log("Paga 10euro di spedizione")
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart1 = 160;
let costoSpedizione1 = 10;

if(totalShoppingCart1 >= 50 ){
let prezzoNoScontato =  totalShoppingCart1;   
let prezzoScontato = (totalShoppingCart1 * 0,2);
let finale = totalShoppingCart1 - prezzoScontato;
console.log(finale)
}else{
    let prezzoNoScontato1 = totalShoppingCart1;
    let prezzoScontato1 = (totalShoppingCart1 * 0,2);
    let finale1 =(totalShoppingCart1 - prezzoScontato1) + costoSpedizione1;
    console.log(finale1)
}


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = isMale ? "Male" : "Female";
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for(let i = 1; i < 101; i++){
   if((i % 3 === 0) && (i % 5 === 0)){
    console.log(i + "FrizzBuzz");
   }else if(i % 3 === 0){
    console.log(i + "Frizz");
   }else if(i % 5 === 0){
    console.log(i + "Buzz");
   }
}