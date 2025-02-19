'use strict';

const score = document. getElementById('score');
const addScore = document. getElementById('addScore');
const average = document. getElementById('average');
const highest = document. getElementById('highest');
const scoreList = document. getElementById('scoreList');

let scores = [];

// Bereken gemiddelde van de elementen van een array
function arrayAverage(array)
{
    let total = 0;

    for (let element of array)
    {
        total += parseFloat(element);
    }

    return total / array.length;
}

// Bereken het hoogste getal in een array
function arrayHighest(array)
{
    let highest = 0;

    for (let element of array)
    {
        element = parseFloat(element);
        
        if (element > highest)
        {
            highest = element;
        }
    }

    return highest;
}

addScore.addEventListener('click', () => 
{
    if (!isNaN(parseFloat(score.value)) && score.value >= 0 && score.value <= 20) // check of score een geldig nummer is dat tussen 0 en 20 ligt
    {
        // Gebruik de array methods push voor nieuwe scores
        scores.push(score.value);

        // Update de statistieken elke keer als er een score wordt toegevoegd
        average.innerHTML = arrayAverage(scores);
        highest.innerHTML = arrayHighest(scores);

        // Toon alle scores in de ul lijst
        scoreList.innerHTML = "";
        for (let element of scores)
        {
            let li = document.createElement('li');
            li.innerText = element;
            scoreList.appendChild(li);
        }
    }
    else
    {
        alert('Voer een geldig getal in tussen 0 en 20');
    }

    // Maak het invoerveld leeg
    score.value = "";
    
}, false)