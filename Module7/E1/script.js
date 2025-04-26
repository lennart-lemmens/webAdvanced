"use strict";

const fetchButton = document.getElementById("fetchButton");
const result = document.getElementById("result");

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if (!response.ok) {
            throw new Error(`HTTP-fout: ${response.status}`);
        }

        const data = await response.json();
        result.textContent = data.title;
    } catch (error) {
        result.textContent = error;
    }
}

fetchButton.addEventListener("click", fetchData);