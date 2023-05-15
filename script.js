//! Scrivere un programma che chieda all'utente:
//!     - il numero di chilometri da percorrere
//!     - eta' del passeggero
//! Sulla base di qeuste informazioni dovra' calcolare il prezzo totale del biglietto di viaggio secondo le seguenti regole:
//!     - il prezzo totale del biglietto e' definito in base ai km (0.233 al km)
//!     - va applicato uno sconto del 19.4% per i minorenni
//!     - va applicato uno sconto del 37.7% per gli over 65

const quantityKm = parseInt(document.getElementById('trip-kilometers').value);
const passengerAge = parseInt(document.getElementById('passenger-age').value);
const button = document.querySelector('button');

let totalPrice = quantityKm * 0.233;
// console.log(totalPrice);
let outputTotalPrice = document.querySelector('span');

let buttonClicked = false;

button.addEventListener('click', function() {
        if(passengerAge < 18){
            totalPrice = totalPrice - ((20 / 100) * totalPrice);
        }else if(passengerAge >= 65){
            totalPrice = totalPrice - ((40 / 100) * totalPrice);
        }
        outputTotalPrice.innerHTML = (' ' + totalPrice.toFixed(2) + ' ' + '€');

        button.addEventListener('click', function() {
            buttonClicked = true;
            if(buttonClicked == true && outputTotalPrice != ''){
                window.alert('Prezzo già calcolato');
            }
            
        }); 
});


