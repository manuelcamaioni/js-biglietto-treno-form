//! Scrivere un programma che chieda all'utente:
//!     - il numero di chilometri da percorrere
//!     - eta' del passeggero
//! Sulla base di qeuste informazioni dovra' calcolare il prezzo totale del biglietto di viaggio secondo le seguenti regole:
//!     - il prezzo totale del biglietto e' definito in base ai km (0.233 al km)
//!     - va applicato uno sconto del 19.4% per i minorenni
//!     - va applicato uno sconto del 37.7% per gli over 65


const button = document.querySelector('button');

// console.log(totalPrice);

button.addEventListener('click', function() {

    let quantityKm = parseInt(document.getElementById('trip-kilometers').value);
    let passengerAge = parseInt(document.getElementById('passenger-age').value);

    let totalPrice = quantityKm * 0.233;

    let outputTotalPrice = document.querySelector('span');
    


        if(passengerAge < 18){
            totalPrice = totalPrice - ((20 / 100) * totalPrice);
        }else if(passengerAge >= 65){
            totalPrice = totalPrice - ((40 / 100) * totalPrice);
        }else if(isNaN(passengerAge) || isNaN(quantityKm)){

            window.alert('I dati inseriti non sono validi, si prega di riprovare.');
            document.getElementById('trip-kilometers').value = undefined;
            document.getElementById('passenger-age').value = undefined;
            outputTotalPrice = undefined;

        } else {
            outputTotalPrice.innerHTML = parseFloat(totalPrice.toFixed(2)) + ' ' + '€';
        }
        

});




