'use strict';

import { Auto } from "./auto.js";
import { Motor } from "./motor.js";

const output = document.getElementById('output');

const buttonActie = (array, index) => {
    alert(array[index].beschikbaar ? array[index].verhuur() : array[index].retourneer());
    voertuigTabel();
}

const knoppenToevoegen = (tableRow, array, index) => {
    const button = document.createElement('button');
    array[index].beschikbaar ? button.innerText = 'Verhuren' : button.innerText = 'Retourneren';
    button.addEventListener('click', () => buttonActie(array, index));
    tableRow.children[7].appendChild(button);
}


const voertuigTabel = () => {
    output.innerHTML = '';
    
    if (autos.length > 0) {
        const autoTitel = document.createElement('h2')
        autoTitel.innerText = "Auto's";
        output.appendChild(autoTitel);

        const autoTable = document.createElement('table');
        const autoRow = document.createElement('tr');
        
        autoRow.innerHTML = `
        <th>Merk</th>
        <th>Model</th>
        <th>Jaar</th>
        <th>Verhuurprijs</th>
        <th>Beschikbaar</th>
        <th>Aantal deuren</th>
        <th>Brandstoftype</th>
        <th></th>`;
        autoTable.appendChild(autoRow);

        for (let i = 0; i < autos.length; i++) {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
            <td>${autos[i].merk}</td>
            <td>${autos[i].model}</td>
            <td>${autos[i].jaar}</td>
            <td>€ ${autos[i].verhuurPrijs.toFixed(2)}</td>
            <td>${autos[i].beschikbaar ? "Ja" : "Nee"}</td>
            <td>${autos[i].aantalDeuren}</td>
            <td>${autos[i].brandstofType}</td>
            <td></td>`;

            knoppenToevoegen(tableRow, autos, i);
            autoTable.appendChild(tableRow);
        }
        output.appendChild(autoTable);
    }
    
    if (motoren.length > 0) {
        const motorTitel = document.createElement('h2')
        motorTitel.innerText = 'Motoren';
        output.appendChild(motorTitel);
        
        const motorTable = document.createElement('table');
        const motorRow = document.createElement('tr');
        
        motorRow.innerHTML = `
        <th>Merk</th>
        <th>Model</th>
        <th>Jaar</th>
        <th>Verhuurprijs</th>
        <th>Beschikbaar</th>
        <th>Cilinderinhoud</th>
        <th>Type</th>
        <th></th>`;
        motorTable.appendChild(motorRow);

        for (let i = 0; i < motoren.length; i++) {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
            <td>${motoren[i].merk}</td>
            <td>${motoren[i].model}</td>
            <td>${motoren[i].jaar}</td>
            <td>€ ${motoren[i].verhuurPrijs.toFixed(2)}</td>
            <td>${motoren[i].beschikbaar ? "Ja" : "Nee"}</td>
            <td>${motoren[i].cilinderinhoud} cc</td>
            <td>${motoren[i].type}</td>
            <td></td>`;

            knoppenToevoegen(tableRow, motoren, i);
            motorTable.appendChild(tableRow);
        }
        output.appendChild(motorTable);
    }
}

let autos = [];
autos.push(new Auto('Volkswagen', 'Polo', 2013, 100.00, 3, 'benzine'));
autos.push(new Auto('BMW', 'E300', 2022, 200.00, 5, 'hybride'));

let motoren = [];
motoren.push(new Motor('Yamaha', 'R6', 2020, 120.00, 599, 'sport'));
motoren.push(new Motor('Honda', '1000R-R', 2024, 180.00, 699, 'tour'));

voertuigTabel();

