'use strict';

import { Product } from './product.js';

const output = document.getElementById('output');

let product1 = new Product('PS5', 499.00, 5);
let product2 = new Product('Xbox Series S', 299.00, 20);
let product3 = new Product('Nintendo Switch', 249.00, 16);

output.innerHTML = 'Product 1:' + product1.toonProduct() + 'Product 2:' + product2.toonProduct() + 'Product 3:' + product3.toonProduct();