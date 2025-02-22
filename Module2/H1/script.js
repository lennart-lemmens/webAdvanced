'use strict';

const courseTitle = document.getElementById('courseTitle');
const courseDesc = document.getElementById('courseDesc');
const addCourse = document.getElementById('addCourse');
const courseList = document.getElementById('courseList');

const studentName = document.getElementById('studentName');
const coursePicker = document.getElementById('coursePicker');
const enrollStudent = document.getElementById('enrollStudent');
const studentList = document.getElementById('studentList');

const studentPicker = document.getElementById('studentPicker');
const modulePicker = document.getElementById('modulePicker');
const moduleGrade = document.getElementById('moduleGrade');
const addGrade = document.getElementById('addGrade');

const reportStudent = document.getElementById('reportStudent');
const generateReport = document.getElementById('generateReport');
const reportOutput = document.getElementById('reportOutput');

// Arrays voor het structureren van gegevens
let courses = [];
let students = [];
let grades = [];

// Cursuslijst weergeven
function generateCourseList()
{
    courseList.innerHTML = '';
    
    let table = document.createElement('table');
    
    let header = document.createElement('tr');
    header.innerHTML = `<th>Cursus</th><th>Beschrijving</th>`
    table.appendChild(header);
    
    for (let course of courses)
    {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${course.name}:</td><td>${course.description}</td>`;
        table.appendChild(tr);
    }

    courseList.appendChild(table);
}

// Studentenlijst weergeven
function generateStudentList()
{
    studentList.innerHTML = '';

    let table = document.createElement('table');

    let header = document.createElement('tr');
    header.innerHTML = `<th>Naam</th><th>Cursussen</th>`
    table.appendChild(header);
    
    for (let student of students)
    {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${student.name}:</td><td>${student.courses}</td>`;
        table.appendChild(tr);
    }

    studentList.appendChild(table);
}

// Vervolgkeuzelijsten bijwerken
function updateDropdownlist(dropdownlist, array)
{
    dropdownlist.innerHTML = '';

    for (let element of array)
    {
        let option = document.createElement('option');
        option.innerText = element.name;
        dropdownlist.appendChild(option);
    }
}

// Vervolgkeuzelijst modules bijwerken
function updateModulePicker()
{
    modulePicker.innerHTML = '';

    for (let student of students)
    {
        if (student.name === studentPicker.value)
        {
            for (let course of student.courses)
            {
                let option = document.createElement('option');
                option.innerText = course;
                modulePicker.appendChild(option);
            }
        }
    }
}

// Cursus toevoegen wanneer op knop wordt geklikt
addCourse.addEventListener('click', () => 
    {
        if (courseTitle.value != '' && courseDesc.value != '')
        {
            courses.push({name: courseTitle.value, description: courseDesc.value});

            generateCourseList();
            updateDropdownlist(coursePicker, courses);

            // Invoervelden leegmaken
            courseTitle.value = '';
            courseDesc.value = '';
        }
    }, false);

// Student toevoegen wanneer op knop wordt geklikt
enrollStudent.addEventListener('click', () =>
    {
        if (studentName.value != '')
        {
            let studentExists = false;
            for (let student of students)
            {
                if (student.name === studentName.value)
                {
                    student.courses.push(coursePicker.value);
                    studentExists = true;
                }
            }
            if (!studentExists) students.push({name: studentName.value, courses: [coursePicker.value]});
            
            generateStudentList();
            updateDropdownlist(studentPicker, students);
            updateModulePicker();

            // Invoervelden leegmaken
            studentName.value = '';
        }
    }, false);

// Vervolgkeuzelijst modules bijwerken wanneer studentennaam wordt gekozen
studentPicker.addEventListener('click', updateModulePicker, false);

// Score toevoegen wanneer op knop wordt geklikt
addGrade.addEventListener('click', () =>
    {
        if (moduleGrade.value != '')
        {
            // Controleer of student al in scorelijst staat
            let studentExists = false;
            for (let grade of grades)
            {
                if (grade.name === studentPicker.value)
                {
                    studentExists = true;

                    // Controleer of student al punten heeft voor de cursus
                    let gradeExists = false;
                    for (let course of grade.courses)
                    {
                        if (course.name === modulePicker.value)
                        {
                            gradeExists = true;
                            course.score = moduleGrade.value;
                        }
                    }

                    if (!gradeExists) grade.courses.push({name: modulePicker.value, score: moduleGrade.value})
                }
            }

            // Als student nog niet in scorelijst staat, voeg student toe met cursus en punten
            if (!studentExists) grades.push({name: studentPicker.value, courses: [{name: modulePicker.value, score: moduleGrade.value}]});

            updateDropdownlist(reportStudent, grades);

            // Invoervelden leegmaken
            moduleGrade.value = '';
        }
    }, false);

// Rapport genereren wanneer op knop wordt geklikt
generateReport.addEventListener('click', () =>
    {
        // Rapport leegmaken
        reportOutput.innerHTML = '';

        // Rapporttabel aanmaken
        let table = document.createElement('table');

        // Hoofding toevoegen
        let header = document.createElement('tr');
        header.innerHTML = `<th>Cursus</th><th>Score</th>`
        table.appendChild(header);
        
        for (let grade of grades)
        {
            // Alle cursussen met scores van student in invoerveld toevoegen aan tabel
            if (grade.name === reportStudent.value)
            {
                for (let course of grade.courses)
                {
                    let tr = document.createElement('tr');
                    tr.innerHTML = `<td>${course.name}:</td><td>${course.score}</td>`;
                    table.appendChild(tr);
                }
            }
        }

        // Tabel weergeven in rapport
        reportOutput.appendChild(table);
    }, false);