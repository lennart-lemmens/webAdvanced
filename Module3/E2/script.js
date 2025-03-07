'use strict';

const output = document.getElementById('output');

const maakBestelling = (drank = 'cola', snack = 'chips') => {
    return {drank: drank, snack: snack};
}

let bestelling1 = maakBestelling();
let bestelling2 = maakBestelling('fanta');
let bestelling3 = maakBestelling('sprite', 'nootjes');

output.innerHTML += `Bestelling 1: ${bestelling1.drank} en ${bestelling1.snack}</br>`;
output.innerHTML += `Bestelling 2: ${bestelling2.drank} en ${bestelling2.snack}</br>`;
output.innerHTML += `Bestelling 3: ${bestelling3.drank} en ${bestelling3.snack}`;