'use strict';

const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const addToCart = document.getElementById('addToCart');
const sortByPrice = document.getElementById('sortByPrice');
const total = document.getElementById('total');
const cartItems = document.getElementById('cartItems');

// Gebruik een array van objecten voor de producten
let products = [];

// Geef de producten in de winkelwagen weer
function showItemList()
{
    cartItems.innerHTML = '';

    let index = 0;

        for (let product of products)
        {
            let li = document.createElement('li');
            li.innerHTML = `${product.name}: €${product.price} <button onclick="removeItem(${index})">x</button>`
            cartItems.appendChild(li);

            index++;
        }
}

// Totaalprijs bijwerken
function updateTotal()
{
    let totalPrice = 0;

    for (let product of products)
    {
        totalPrice += parseFloat(product.price);
    }

    total.innerText = totalPrice.toFixed(2);
}

// Verwijder product uit winkelwagen
function removeItem(index)
{
    products.splice(index, 1);
    showItemList();
    updateTotal();
}

addToCart.addEventListener('click', () => 
    {
        // Product toevoegen aan array
        products.push({name: productName.value, price: parseFloat(productPrice.value).toFixed(2)});

        showItemList();
        updateTotal();

        // Invoervelden leegmaken
        productName.value = '';
        productPrice.value = '';
    }, false);

sortByPrice.addEventListener('click', () => 
    {
        // Sorteer producten op prijs
        products.sort(
            (price1, price2) => (parseFloat(price1.price) > parseFloat(price2.price)) ? 1 : (parseFloat(price1.price) < parseFloat(price2.price)) ? -1 : 0
        );

        showItemList();
    }, false);