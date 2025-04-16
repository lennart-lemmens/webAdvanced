'use strict';

import { Bankrekening } from "./bankrekening.js";
import { Spaarrekening } from "./spaarrekening.js";

const accounts = document.getElementById("accounts");
const transactions = document.getElementById("transactions");

const rekeningenWeergeven = () => {
  accounts.innerHTML = "<h1>Rekeningen</h1>";
  const ul = document.createElement("ul");

  for (let spaarrekening of spaarrekeningen) {
    const li = document.createElement("li");
    li.innerText = spaarrekening.overzicht;
    ul.appendChild(li);
  }

  accounts.appendChild(ul);
}

const voerTransactieUit = (from, to, bedrag) => {
  Bankrekening.transactie(from, to, bedrag);

  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${from.eigenaar} (${from.rekeningnummer})</td>
  <td>${to.eigenaar} (${to.rekeningnummer})</td>
  <td>€ ${bedrag.toFixed(2)}</td>
  `;

  transactionTable.appendChild(tr);
}

const spaarrekeningen = [];
spaarrekeningen.push(new Spaarrekening(Bankrekening.rekeningNrGenerator(), "Max Mustermann", 2000, 0.02));
spaarrekeningen.push(new Spaarrekening(Bankrekening.rekeningNrGenerator(), "Jane Doe", 4000, 0.03));
spaarrekeningen.push(new Spaarrekening(Bankrekening.rekeningNrGenerator(), "Jean Dupont", 1000, 0.025));

rekeningenWeergeven();

transactions.innerHTML = "<h1>Transacties</h1>";

const transactionTable = document.createElement("table");
const transactionHeader = document.createElement("tr")
transactionHeader.innerHTML = `
<th>Zender</th>
<th>Ontvanger</th>
<th>Bedrag</th>
`;
transactionTable.appendChild(transactionHeader);
transactions.appendChild(transactionTable);

voerTransactieUit(spaarrekeningen[1], spaarrekeningen[0], 500);
voerTransactieUit(spaarrekeningen[1], spaarrekeningen[2], 250);
voerTransactieUit(spaarrekeningen[2], spaarrekeningen[0], 750);