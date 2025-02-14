'use strict';

let bereken = document.getElementById("bereken");
let resultaat = document.getElementById("resultaat");

bereken.addEventListener("click", () => {
    let getal1 = parseFloat(document.getElementById("getal1").value);
    let getal2 = parseFloat(document.getElementById("getal2").value);

    if (!isNaN(getal1) && !isNaN(getal2)) // controleer of waarde een getal is
        {
            resultaat.innerHTML = getal1 + getal2;
        }
}, false)