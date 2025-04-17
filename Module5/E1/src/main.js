'use strict';

const startButton = document.getElementById("startButton");

const veranderKleur = kleur => {
  document.body.style.backgroundColor = kleur;
}

startButton.addEventListener("click", function() {
  veranderKleur("red");
  setTimeout(veranderKleur, 1000, "green");
  setTimeout(veranderKleur, 2000, "blue");
  setTimeout(veranderKleur, 3000, "white");
});