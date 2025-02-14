'use strict';

// Alle elementen met class "special" vindt en hun tekst rood maakt
let special = document.getElementsByClassName('special');
for (let element of special)
{
    element.style.color = 'red';
}

// De tweede paragraaf vindt en onderstreept
let p = document.getElementsByTagName('p');
p[1].style.textDecoration = 'underline';

// Het aantal gevonden "special" elementen toont in het output div
let output = document.querySelector('#output');
output.innerHTML = special.length;