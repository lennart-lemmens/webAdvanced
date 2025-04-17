export const toonCursussen = cursussen => {
    const courseList = document.getElementById("course-list");
    
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
    const studentList = document.getElementById("student-list");

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

export const toonDocenten = docenten => {
    const teacherList = document.getElementById("teacher-list");

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

export const toonInschrijvingen = inschrijvingen => {
    const enrollmentList = document.getElementById("enrollment-list");

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