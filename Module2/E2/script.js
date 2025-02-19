'use strict';

const recipeName = document.getElementById('recipeName');
const prepTime = document.getElementById('prepTime');
const ingredients = document.getElementById('ingredients');
const generateCard = document.getElementById('generateCard');
const result = document.getElementById('result');

let ingredientList = [];

generateCard.addEventListener('click', () => 
{
    result.innerHTML = '';

    // Gebruik template literals voor het genereren van de receptkaart
    result.innerHTML = `
    <p>🥘 ${recipeName.value}</p>
    <p>⏱️ Bereidingstijd: ${prepTime.value} minuten</p>
    <p>Ingrediënten:</p>
    `
    
    // Converteer de ingrediënten textarea naar een array (split op nieuwe regel)
    ingredientList = ingredients.value.split('\n');

    // Toon alle ingrediënten in een mooie lijst
    let ul = document.createElement('ul');

    for (let ingredient of ingredientList)
    {
        let li = document.createElement('li');
        li.innerText = ingredient;
        ul.appendChild(li);
    }

    result.appendChild(ul);

    // Invoervelden leegmaken
    recipeName.value = "";
    prepTime.value = "";
    ingredients.value = "";
    
}, false);
