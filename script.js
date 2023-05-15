//! Scrivere un programma che chieda all'utente:
//!     - il numero di chilometri da percorrere
//!     - eta' del passeggero
//! Sulla base di qeuste informazioni dovra' calcolare il prezzo totale del biglietto di viaggio secondo le seguenti regole:
//!     - il prezzo totale del biglietto e' definito in base ai km (0.233 al km)
//!     - va applicato uno sconto del 19.4% per i minorenni
//!     - va applicato uno sconto del 37.7% per gli over 65

const quantityKm = document.getElementById('trip-kilometers');
const passengerAge = document.getElementById('passenger-age');
