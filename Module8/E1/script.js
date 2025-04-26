"use strict";

const body = document.querySelector("body");
const themeToggle = document.getElementById("themeToggle");

const setTheme = () => {
    let theme = localStorage.getItem("theme");
    body.className = theme;
    if (theme === "light-theme") {
        themeToggle.textContent = "Schakel naar donker thema";
    } else {
        themeToggle.textContent = "Schakel naar licht thema";
    }
}

const toggleTheme = () => {
    if (body.className === "light-theme") {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.setItem("theme", "light-theme");
    }
    setTheme();
}

themeToggle.addEventListener("click", toggleTheme);

window.addEventListener("load", setTheme)