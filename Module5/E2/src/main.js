'use strict';

const counter = document.getElementsByClassName("counter");
const clickButton = document.getElementById("clickButton");
const message = document.getElementsByClassName("message");

const tellerOmhoog = () => {
  return new Promise((resolve, reject) => {
    let tellerWaarde = counter[0].innerText;
    tellerWaarde++;
    counter[0].innerText = tellerWaarde;
    resolve(tellerWaarde);
  });
}

async function drukOpKnop() {
  try {
    let teller = await tellerOmhoog();
    teller >= 5 ? message[0].innerText = "Proficiat, je hebt minstens 5 keer op de knop gedrukt!" : "";
  } catch (error) {
    console.error("Er ging iets mis: ", error);
  }
}

clickButton.addEventListener("click", drukOpKnop);
