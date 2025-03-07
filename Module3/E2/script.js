'use strict';

const output = document.getElementById('output');

const maakBestelling = (drink = 'cola', snack = 'chips') => {
    let date = new Date();
    let timestamp = date.toLocaleString("nl-BE");
    return {drink: drink, snack: snack, timestamp: timestamp};
}

let bestelling1 = maakBestelling();
let bestelling2 = maakBestelling('fanta');
let bestelling3 = maakBestelling('sprite', 'nootjes');

output.innerHTML += `<tr><td>${bestelling1.timestamp}: </td><td>${bestelling1.drink} en ${bestelling1.snack}</td></tr>`;
output.innerHTML += `<tr><td>${bestelling2.timestamp}: </td><td>${bestelling2.drink} en ${bestelling2.snack}</td></tr>`;
output.innerHTML += `<tr><td>${bestelling3.timestamp}: </td><td>${bestelling3.drink} en ${bestelling3.snack}</td></tr>`;
