'use strict';

import { Student } from "./student.js";
import { Docent } from "./docent.js";
import { Cursus } from "./cursus.js";
import { Inschrijving } from "./inschrijving";
import { toonCursussen, toonStudenten, toonDocenten, toonInschrijvingen, studentInschrijven, beoordelingslijstenVullen, voegBeoordelingToe } from "./methods.js";

const cursussen = [];
const studenten = [];
const docenten = [];
const inschrijvingen = [];

const enrollButton = document.getElementById("enroll-button");
enrollButton.addEventListener("click", () => studentInschrijven(inschrijvingen, studenten, cursussen))

const buttonAddAssessment = document.getElementById("button-add-assessment");
buttonAddAssessment.addEventListener("click", () => voegBeoordelingToe(inschrijvingen, studenten, cursussen))

docenten.push(new Docent("Max Mustermann", "max.mustermann@ehb.be", 40, "Programming Essentials", "01/09/2015"));
studenten.push(new Student("Jan Janssen", "jan.janssen@student.ehb.be", 18, "0123456789", 1));
cursussen.push(new Cursus("Programming Essentials 1", "Leer de basis van het programmeren met JS.", docenten[0], 5, 100));
inschrijvingen.push(new Inschrijving(studenten[0], cursussen[0], "01/09/2024", "actief"));

toonCursussen(cursussen);
toonStudenten(studenten);
toonDocenten(docenten);
toonInschrijvingen(inschrijvingen);
beoordelingslijstenVullen(studenten, cursussen);