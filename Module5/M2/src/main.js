'use strict';

const seconds = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const cancelButton = document.getElementById("cancelButton");
const timerDisplay = document.getElementById("timerDisplay");
const message = document.getElementById("message");

let timer = 0;
let cancelled = false;

const setMessage = text => {
    message.style.display = "block";
    message.innerText = text;
}

const startTimer = () => {
    cancelled = false;
    timer = seconds.value;
    timerDisplay.innerText = timer;
    cancelButton.removeAttribute("disabled");
    setMessage("Timer gestart.");
    
    countdown()
    .then(text => setMessage(text))
    .catch(text => setMessage(text));
}

const stopTimer = () => {
    cancelled = true;
}

const stopInterval = interval => {
    clearInterval(interval);
    cancelButton.setAttribute("disabled", "");
}

const countdown = async () => {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (cancelled) {
                stopInterval(interval);
                reject("Timer geannuleerd.");
            }
            
            timer--;
            timerDisplay.innerText = timer;

            if (timer === 0) {
                stopInterval(interval);
                resolve("Timer op 0");
            }
        }, 1000)
    });
}

startButton.addEventListener("click", startTimer);
cancelButton.addEventListener("click", stopTimer);