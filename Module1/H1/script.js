'use strict';

let mainMenu = document.getElementById('mainMenu');
let content = document.querySelectorAll('.content h1, .content h2');

// ID toevoegen aan headers zodat ernaar kan worden gelinkt
for (let i = 0; i < content.length; i++)
{
    content[i].id = 'header' + (i + 1);
}

// Nav vullen met links naar h1's en h2's
let ul = document.createElement('ul');
let subItems = "";

for (let i = 0; i < content.length; i++)
{
    // list item aanmaken
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = content[i].innerText;
    a.href = '#header' + (i + 1);
    li.appendChild(a);

    if (content[i].tagName == 'H1')
    {   
        // list item toevoegen aan hoofdlijst
        ul.appendChild(li);

        // sublijst aanmaken voor h2's
        subItems = document.createElement('ul');
        subItems.classList.add('hidden')
        li.appendChild(subItems);

        // event toevoegen die sublijst openklapt wanneer op hoofdstuktitel wordt geklikt
        a.addEventListener('click', () => {
            a.nextElementSibling.classList.toggle('hidden');
        }, false);
    }
    else if (content[i].tagName == 'H2' && subItems)
    {
        // list item toevoegen aan sublijst
        subItems.appendChild(li);
    }
}

mainMenu.appendChild(ul);

// Verander de class van een nav-element naar active als over die sectie wordt gehoverd
let navItems = document.querySelectorAll('#mainMenu a');

for (let i = 0; i < content.length; i++)
{
    content[i].addEventListener('mouseover', () => {
        for (let navItem of navItems)
        {
            if (content[i].innerText === navItem.innerText)
            {
                navItem.classList.add('active');
            }
        }    
    }, false);
    content[i].addEventListener('mouseleave', () => {
        for (let navItem of navItems)
        {
            if (content[i].innerText === navItem.innerText)
            {
                navItem.classList.remove('active');
            }
        }    
    }, false);
}