/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1");
const area = (l1, l2) => l1 + l2;

console.log(area(15, 15));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
const crazySum = (n1, n2) => {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    // area(n1, n2);
    return n1 + n2;
  }
};
console.log(crazySum(3, 4));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");

const crazyDiff = (val) => {
  if (val > 19) {
    return Math.abs(val - 19) * 19;
  } else {
    return Math.abs(val - 19);
  }
};
console.log(crazyDiff(17));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
const boundary = (int) => {
  if ((parseInt(int) > 19 && parseInt(int) < 101) || parseInt(int) == 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");

const epify = (string) => {
  m = "EPICODE";
  if (string.toLowerCase() === "epicode") {
    return string;
  } else {
    return m.concat(" ", string);
  }
};
console.log(epify("EPicOdE"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");

const check3and7 = (n) => {
  if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
    console.log("Il numero è divisibile per 3 oppure per 7");
  } else {
    console.warn("Mi dispiace il numero inserito non è positivo oppure non divisibile per 3 o per 7");
  }
};
check3and7(36);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");

const reverseString = (string) => {
  let str = "";
  for (let i = string.length; i >= 0; i--) {
    str += string.charAt(i);
  }
  return str;
};
console.log(reverseString("itopinonavevanonipoti"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");

const upperFirst = (string) => {
  let arr = string.split(" ");
  let risultato = [];
  for (let i = 0; i < arr.length; i++) {
    risultato[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return risultato.join(" ");
};
console.log(upperFirst("oggi è una splendida giornata di sole e di mare"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");

const cutString = (string) => {
  return string.slice(1, string.length - 1);
};
console.log(cutString("ma che splendida gironata"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10");

const giveMeRandom = (n) => {
  let arr = new Array();
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 11);
  }
  return arr;
};
console.log(giveMeRandom(39));
