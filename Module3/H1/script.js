'use strict';

const playerName = document.getElementById('playerName');
const playerStats = document.getElementById('playerStats');

let spelerObject = {};

const maakNieuweSpeler = (naam = 'Player 1') => {
    spelerObject = {naam: naam || 'Player 1', level: 1, health: 100};

    updateStats();

    playerName.value = '';
}

const doeSchadeBijSpeler = (speler, schade = 0) => {
    if ((speler.health - schade) >= 0) {
        speler.health -= schade;
    }

    updateStats();
}

const levelSpelerOp = speler => {
    speler.level++;
    speler.health = 100;
    
    updateStats();
}

const updateStats = () => {
    playerStats.innerHTML = `
    Naam: ${spelerObject.naam}</br>
    Level: ${spelerObject.level}</br>
    Health: ${spelerObject.health}
    `;
}