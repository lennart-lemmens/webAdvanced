"use strict";

const gebruikersContainer = document.getElementById("gebruikers-container");
const laadIndicator = document.getElementsByClassName("laad-indicator")[0];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const div = document.createElement("div");
      div.className = "gebruiker-kaart";
      div.innerHTML = `
      <div class="gebruiker-naam">${user.name}</div>
      <div class="gebruiker-email">${user.email}</div>
      <div class="gebruiker-email">${user.phone}</div>
      `;
      gebruikersContainer.appendChild(div);
    });
  })
  .then((laadIndicator.remove()))
  .catch((error) => {
    const div = document.createElement("div");
    div.className = "error-melding";
    div.textContent = error.message;
    gebruikersContainer.innerHTML = "";
    gebruikersContainer.appendChild(div);
  });
