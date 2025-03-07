'use strict';

const playerName = document.getElementById('playerName');
const score = document.getElementById('score');
const scoreBoard = document.getElementById('scoreBoard');

const verwerkScore = (naam = 'Onbekend', score = 0) => {
    if (naam && !isNaN(score))
    {
        return {naam: naam, score: score};
    }
}

const voegScoreToe = () => {
    let naamWaarde = playerName.value || 'Onbekend';
    let scoreWaarde = score.value || 0;
    
    let scoreObject = verwerkScore(naamWaarde, scoreWaarde);

    scoreBoard.innerHTML += `${scoreObject.naam}: ${scoreObject.score}</br>`;

    playerName.value = '';
    score.value = '';
}