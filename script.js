//! Scrivere un programma che chieda all'utente:
//!     - il numero di chilometri da percorrere
//!     - eta' del passeggero
//! Sulla base di qeuste informazioni dovra' calcolare il prezzo totale del biglietto di viaggio secondo le seguenti regole:
//!     - il prezzo totale del biglietto e' definito in base ai km (0.233 al km)
//!     - va applicato uno sconto del 19.4% per i minorenni
//!     - va applicato uno sconto del 37.7% per gli over 65


const generateButton = document.getElementById('generate-ticket-button');
const emptyButton = document.getElementById('empty-field-button');

// console.log(totalPrice);
const outputTotalPrice = document.querySelector('p');
generateButton.addEventListener('click', function() {

    const quantityKm = parseInt(document.getElementById('trip-kilometers').value);
    const passengerAge = parseInt(document.getElementById('passenger-age').value);

    let totalPrice = quantityKm * 0.233;

    
    


        if(passengerAge < 18){
            totalPrice = totalPrice - (0.194 * totalPrice);
        }else if(passengerAge >= 65){
            totalPrice = totalPrice - (0.377 * totalPrice);
        }else if(isNaN(passengerAge) || isNaN(quantityKm)){

            window.alert('I dati inseriti non sono validi, si prega di riprovare.');
            document.getElementById('trip-kilometers').value = undefined;
            document.getElementById('passenger-age').value = undefined;

        } else{}
        outputTotalPrice.innerHTML += totalPrice.toFixed(2) + ' ' + '€';

});


emptyButton.addEventListener('click', function() {

    document.getElementById('trip-kilometers').value = '';
    document.getElementById('passenger-age').value = '';
    outputTotalPrice.innerHTML = 'Prezzo del biglietto: ';
});

