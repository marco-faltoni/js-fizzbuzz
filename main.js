// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1
// a 100, ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz. Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.


// scrivo un programma che stampi in successione numeri da 1 a 100
// quindi devo creare due variabili con un numero minimo e un numero massimo
var min = 1;
var max = 100;

// attivo un ciclo for che va da 1 a 100 assegando ad i il valore minimo e "ciclandolo" fino al valore massimo
for (var i = min; i <= max; i++) {

    if (i % 15==0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0)  {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    // durante la stampa intercetto i numeri multipli sia di 5 che di 3 e sostiuisco alla stampa con il numero la parola FizzBuzz; faccio prima questa operazione rispetto alle altre perché altrimenti FuzzBizz verrebbe sostiuita da Fizz e da Buzz
    // durante la stampa intercetto i numeri multipli di 3 e sostiuisco alla stampa con il numero la parola Fizz
    // durante la stampa intercetto i numeri multipli di 5 e sostiuisco alla stampa con il numero la parola Buzz
}





// // VARIANTE ALL'ESERCIZIO 1 - decommentare per visualizzarlo
// // scrivo un programma che stampi in successione numeri da 1 a 100
// // quindi creo quattro variabili; una con un numero minimo, una un numero massimo, una con il nome stringa Fizz e una con il nome stringa Buzz
// var min = 1;
// var max = 100;
// var mult_3 ='Fizz';
// var mult_5 ='Buzz';
//
// // attivo un ciclo for che va da 1 a 100 assegando ad i il valore minimo e "ciclandolo" fino al valore massimo
// for (var i = min; i <= max; i++) {
//
//     if (i % 15==0) {
//         console.log(mult_3 + mult_5);
//     } else if (i % 3 == 0) {
//         console.log(mult_3);
//     } else if (i % 5 == 0)  {
//         console.log(mult_5);
//     } else {
//         console.log(i);
//     }
//     // durante la stampa intercetto i numeri multipli sia di 5 che di 3 e sostiuisco alla stampa con il numero la parola FizzBuzz; faccio prima questa operazione rispetto alle altre perché altrimenti FuzzBizz verrebbe sostiuita da Fizz e da Buzz
//     // durante la stampa intercetto i numeri multipli di 3 e sostiuisco alla stampa con il numero la parola Fizz
//     // durante la stampa intercetto i numeri multipli di 5 e sostiuisco alla stampa con il numero la parola Buzz
// }






// // VARIANTE ALL'ESERCIZIO 2 - decommentare per visualizzarlo
// // scrivo un programma che stampi in successione numeri da 1 a 100
// // quindi creo quattro variabili; una con un numero minimo, una un numero massimo, una con l'operazione per il multiplo di 3 e una per il multiplo di 5
// var min = 1;
// var max = 100;
// var mult_3 = i % 3 == 0;
// var mult_5 = i % 5 == 0;
//
// // attivo un ciclo for che va da 1 a 100 assegando ad i il valore minimo e "ciclandolo" fino al valore massimo
// for (var i = min; i <= max; i++) {
//
//     if (mult_3 && mult_5) {
//         console.log('FizzBuzz');
//     } else if (mult_3) {
//         console.log('Fizz');
//     } else if (mult_5)  {
//         console.log('Buzz');
//     }
//     // durante la stampa intercetto i numeri multipli sia di 5 che di 3 e sostiuisco alla stampa con il numero la parola FizzBuzz; faccio prima questa operazione rispetto alle altre perché altrimenti FuzzBizz verrebbe sostiuita da Fizz e da Buzz
//     // durante la stampa intercetto i numeri multipli di 3 e sostiuisco alla stampa con il numero la parola Fizz
//     // durante la stampa intercetto i numeri multipli di 5 e sostiuisco alla stampa con il numero la parola Buzz
// }
