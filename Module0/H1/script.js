'use strict';

let themaKnop = document.getElementById('themaKnop');
let body = document.getElementsByTagName('body');
let a = document.getElementsByTagName('a');

themaKnop.addEventListener('click', () => {
    body[0].classList.toggle('dark')
    
    for (let i = 0; i < a.length; i++)
    {
        a[i].classList.toggle('dark');
    }

    themaKnop.innerHTML == 'Donker thema' ? themaKnop.innerHTML = 'Licht thema' : themaKnop.innerHTML = 'Donker thema';
}, false)