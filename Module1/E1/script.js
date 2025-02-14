'use strict';

// Vraag de gebruiker eerst om hun naam via prompt
let naam = prompt('Wat is jouw naam?');
 
// Stel vervolgens 3 vragen over programmeren via prompts
// Voor elk juist antwoord toon je een alert met "Goed gedaan!"
// Voor elk fout antwoord toon je een alert met het juiste antwoord
let score = 0;
let vraag1 = prompt(`Dag ${naam}, welke taal gebruiken we voor de structuur van een website?`);
checkAnswer(vraag1, 'HTML');

let vraag2 = prompt('Welke taal gebruiken we voor de opmaak van een website?');
checkAnswer(vraag2, 'CSS');

let vraag3 = prompt('Welke taal gebruiken we om een website interactief?');
checkAnswer(vraag3, 'Javascript');

// Op het einde toon je een alert met de totaalscore
alert('Jouw score is: ' + score);


function checkAnswer(answer, correctanswer)
{
    answer = answer.toLowerCase();
    let correctanswerLowerCase = correctanswer.toLowerCase();
    
    if (answer == correctanswerLowerCase)
    {
        alert('Goed gedaan!');
        score ++;
    }
    else
    {
        alert('Jammer! Het juiste antwoord was: ' + correctanswer);
    }
}