'use strict';

const progressBar = document.getElementsByClassName("progress-bar")[0];
const loadButton = document.getElementById("loadButton");
const gallery = document.getElementsByClassName("gallery")[0];

const laadAfbeelding = url => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      console.log("Afbeelding is geladen.");
      resolve(img);
    };
    img.onerror = error => {
      console.log("Er ging iets mis bij het laden van de afbeelding.");
      reject(error);
    };
    img.src = url;
  });
};

async function laadAlleAfbeeldingen() {
  gallery.innerHTML = "";
  try {
    const img1 = await laadAfbeelding("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/capsule_616x353.jpg?t=1738051073");
    gallery.appendChild(img1);
    progressBar.innerHTML = "33%";
    progressBar.style.width = "33%";

    const img2 = await laadAfbeelding("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg?t=1741137570");
    gallery.appendChild(img2);
    progressBar.innerHTML = "67%";
    progressBar.style.width = "67%";

    const img3 = await laadAfbeelding("https://store-images.s-microsoft.com/image/apps.50670.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.d205e025-5444-4eb1-ae46-571ae6895928?q=90&w=480&h=270");
    gallery.appendChild(img3);
    progressBar.innerHTML = "100%";
    progressBar.style.width = "100%";

    console.log("Alle afbeeldingen zijn geladen.");
  } catch (error) {
    console.error("Er ging iets mis: ", error);
  }
};

loadButton.addEventListener("click", laadAlleAfbeeldingen);