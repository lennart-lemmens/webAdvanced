import { Student } from "./student.js";
import { Cursus } from "./cursus.js";
import { Inschrijving } from "./inschrijving.js";

const courseList = document.getElementById("course-list");
const studentList = document.getElementById("student-list");
const teacherList = document.getElementById("teacher-list");
const enrollmentList = document.getElementById("enrollment-list");
const studentDropdown = document.getElementById("student-dropdown");
const courseDropdown = document.getElementById("course-dropdown");
const assessmentInput = document.getElementById("assessment-input");

export const toonCursussen = cursussen => {    
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
  
export const toonStudenten = studenten => {
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
        <td>${student.leeftijd} jaar</td>
        <td>${student.studentnummer}</td>
        <td>${student.studiejaar}</td>
        `;
        table.appendChild(tableRow);
    }

    studentList.appendChild(table);
};

export const toonDocenten = docenten => {
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
        <td>${docent.leeftijd} jaar</td>
        <td>${docent.vakgebied}</td>
        <td>${docent.aanstellingsdatum}</td>
        `;
        table.appendChild(tableRow);
    }

    teacherList.appendChild(table);
};

export const toonInschrijvingen = inschrijvingen => {
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
        <td>${inschrijving.beoordeling}${inschrijving.beoordeling === "" ? "" : "/20"}</td>
        `;
        table.appendChild(tableRow);
    }

    enrollmentList.appendChild(table);
};

export const studentInschrijven = (inschrijvingen, studenten, cursussen) => {
    const studentNumberInput = document.getElementById("student-number-input");
    const courseNameInput = document.getElementById("course-name-input");
    const enrollmentDateInput = document.getElementById("enrollment-date-input");

    const student = Student.zoekOpStudentnummer(studentNumberInput.value, studenten);
    const cursus = Cursus.zoekOpTitel(courseNameInput.value, cursussen);
    const inschrijvingsdatum = enrollmentDateInput.value;

    const reedsIngeschreven = Inschrijving.controleerDubbele(student, cursus, inschrijvingen);
    const cursusVol = cursus.ingeschrevenstudenten === cursus.maximumStudenten;

    if (!reedsIngeschreven && !cursusVol) {
        inschrijvingen.push(new Inschrijving(student, cursus, inschrijvingsdatum));
        cursus.ingeschrevenstudenten++;
    }

    studentNumberInput.value = "";
    courseNameInput.value = "";
    enrollmentDateInput.value = "";
    toonInschrijvingen(inschrijvingen);
};

export const beoordelingslijstenVullen = (studenten, cursussen) => {    
    for (let student of studenten) {
        const option = document.createElement("option");
        option.value = student.studentnummer;
        option.innerHTML = student.naam;

        studentDropdown.appendChild(option);
    }
    
    for (let cursus of cursussen) {
        const option = document.createElement("option");
        option.value = cursus.titel;
        option.innerHTML = cursus.titel;

        courseDropdown.appendChild(option);
    }
};

export const voegBeoordelingToe = (inschrijvingen, studenten, cursussen) => {
    for (let inschrijving of inschrijvingen) {
        if (inschrijving.student === Student.zoekOpStudentnummer(studentDropdown.value, studenten) && inschrijving.cursus === Cursus.zoekOpTitel(courseDropdown.value, cursussen)) {
            inschrijving.beoordeling = assessmentInput.value;
        }
    }

    assessmentInput.value = "";

    toonInschrijvingen(inschrijvingen);
};