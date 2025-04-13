'use strict';

const grid = document.getElementById('grid');
const redCount = document.getElementById('redCount');
const blueCount = document.getElementById('blueCount');
const greenCount = document.getElementById('greenCount');

const changeColor = (div, color) => {
    div.style.backgroundColor = color;
    div.setAttribute('class', color);
    updateCounters();
};

const updateCounters = () => {
    // Count the number of cells with a certain color
    const redCells = document.querySelectorAll('.red').length;
    const blueCells = document.querySelectorAll('.blue').length;
    const greenCells = document.querySelectorAll('.green').length;

    // Update the counters
    redCount.innerHTML = redCells;
    blueCount.innerHTML = blueCells;
    greenCount.innerHTML = greenCells;
};

for (let i = 0; i < 25; i++) {
    // Create cell 
    let div = document.createElement('div');

    // Add interactivity to cell
    div.addEventListener('pointerover', () => {
        changeColor(div, 'red')
    });
    div.addEventListener('click', () => {
        changeColor(div, 'blue')
    });
    div.addEventListener('dblclick', () => {
        changeColor(div, 'green')
    });
    
    // Add cells to grid
    grid.appendChild(div);
};