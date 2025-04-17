'use strict';

import { Persoon } from "./persoon.js";
import { Student } from "./student.js";
import { Docent } from "./docent.js";
import { Cursus } from "./cursus.js";
import { Inschrijving } from "./inschrijving";

const courseList = document.getElementById("course-list");
const studentList = document.getElementById("student-list");
const teacherList = document.getElementById("teacher-list");
const enrollmentList = document.getElementById("enrollment-list");

const cursussen = [];
const studenten = [];
const docenten = [];
const inschrijvingen = [];

const toonCursussen = () => {
  courseList.innerHTML = "";  
  const table = document.createElement("table");
  const tableHeader = document.createElement("tr");
  tableHeader.innerHTML = `
  <th>Titel</th>
  <th>Beschrijving</th>
  <th>Docent</th>
  <th>ECTS</th>
  <th>Maximum studenten</th>
  `;
  table.appendChild(tableHeader);

  for (let cursus of cursussen) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>${cursus.titel}</td>
    <td>${cursus.beschrijving}</td>
    <td>${cursus.docent.naam}</td>
    <td>${cursus.ects}</td>
    <td>${cursus.maximumStudenten}</td>
    `;
    table.appendChild(tableRow);
  }

  courseList.appendChild(table);
};

const toonStudenten = () => {
  studentList.innerHTML = "";  
  const table = document.createElement("table");
  const tableHeader = document.createElement("tr");
  tableHeader.innerHTML = `
  <th>Naam</th>
  <th>E-mailadres</th>
  <th>Leeftijd</th>
  <th>Studentnummer</th>
  <th>Studiejaar</th>
  `;
  table.appendChild(tableHeader);

  for (let student of studenten) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>${student.naam}</td>
    <td>${student.email}</td>
    <td>${student.leeftijd}</td>
    <td>${student.studentnummer}</td>
    <td>${student.studiejaar}</td>
    `;
    table.appendChild(tableRow);
  }

  studentList.appendChild(table);
};

const toonDocenten = () => {
  teacherList.innerHTML = "";  
  const table = document.createElement("table");
  const tableHeader = document.createElement("tr");
  tableHeader.innerHTML = `
  <th>Naam</th>
  <th>E-mailadres</th>
  <th>Leeftijd</th>
  <th>Vakgebied</th>
  <th>Aanstellingsdatum</th>
  `;
  table.appendChild(tableHeader);

  for (let docent of docenten) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>${docent.naam}</td>
    <td>${docent.email}</td>
    <td>${docent.leeftijd}</td>
    <td>${docent.vakgebied}</td>
    <td>${docent.aanstellingsdatum}</td>
    `;
    table.appendChild(tableRow);
  }

  teacherList.appendChild(table);
};

const toonInschrijvingen = () => {
  enrollmentList.innerHTML = "";  
  const table = document.createElement("table");
  const tableHeader = document.createElement("tr");
  tableHeader.innerHTML = `
  <th>Student</th>
  <th>Cursus</th>
  <th>Inschrijvingsdatum</th>
  <th>Status</th>
  <th>Beoordeling</th>
  `;
  table.appendChild(tableHeader);

  for (let inschrijving of inschrijvingen) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>${inschrijving.student.naam}</td>
    <td>${inschrijving.cursus.titel}</td>
    <td>${inschrijving.inschrijvingsdatum}</td>
    <td>${inschrijving.status}</td>
    <td>${inschrijving.beoordeling}</td>
    `;
    table.appendChild(tableRow);
  }

  enrollmentList.appendChild(table);
};

docenten.push(new Docent("Max Mustermann", "max.mustermann@ehb.be", 40, "Programming Essentials", "01/09/2015"));
studenten.push(new Student("Jan Janssen", "jan.janssen@student.ehb.be", 18, "0123456789", 1));
cursussen.push(new Cursus("Programming Essentials 1", "Leer de basis van het programmeren met JS.", docenten[0], 5, 100));
inschrijvingen.push(new Inschrijving(studenten[0], cursussen[0], "01/09/2024", "actief"));

toonCursussen();
toonStudenten();
toonDocenten();
toonInschrijvingen();