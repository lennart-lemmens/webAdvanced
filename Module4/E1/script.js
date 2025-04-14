'use strict';

import { Student } from './student.js';

const output = document.getElementById('output');

let student1 = new Student('Jane Doe', 'Programming Essentials 1', 'Web Essentials');
let student2 = new Student('Max Mustermann');

student1.voegPuntToe('Programming Essentials 1', 18);
student2.voegPuntToe('Programming Essentials 1', 15);

student1.voegPuntToe('Web Essentials', 12);
student2.voegPuntToe('Web Essentials', 19);

output.innerHTML = `${student1.toonRapport()} <br> ${student2.toonRapport()}`;
