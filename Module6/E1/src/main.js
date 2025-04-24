'use strict';

const haalTekstOp = document.getElementById('haalTekstOp');
const resultaat = document.getElementById('resultaat');

const tekstOphalen = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(json => {
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.textContent = json.title;
        p.textContent = json.body;
        resultaat.innerHTML = "";
        resultaat.appendChild(h2);
        resultaat.appendChild(p);
    })
    .catch(error => {
        const p = document.createElement("p");
        p.classList.add("error");
        p.textContent = error.message;
        resultaat.innerHTML = "";
        resultaat.appendChild(p);
    });
}

haalTekstOp.addEventListener("click", tekstOphalen);