'use strict';

const loadingMessage = document.getElementById('loadingMessage');

window.addEventListener('load', () => {
    loadingMessage.innerHTML = 'Welcome!';
    setTimeout(() => {
        loadingMessage.innerHTML = '';
    }, 2000);
});