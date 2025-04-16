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
      <td>${cursus.docent}</td>
      <td>${cursus.ects}</td>
      <td>${cursus.maximumStudenten}</td>
      `;
      table.appendChild(tableRow);
    }

    courseList.appendChild(table);
};

cursussen.push(new Cursus("Programming Essentials 1", "Leer de basis van het programmeren met JS.", "Ruben Dejonckheere", 5, 100));

toonCursussen();