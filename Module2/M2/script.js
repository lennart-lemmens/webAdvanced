'use strict';

const student = document.getElementById('student');
const course = document.getElementById('course');
const grade = document.getElementById('grade');
const addGrade = document.getElementById('addGrade');
const studentOverview = document.getElementById('studentOverview');

let students = [];

function averageGrade(array)
{
    let total = 0;
    for (let element of array)
    {
        total += parseFloat(element.grade);
    }
    return total / array.length;
}

function highestGrade(array)
{
    let highest = array[0].grade;
    for (let element of array)
    {
        let elementGrade = parseFloat(element.grade);
        if (elementGrade > highest) highest = elementGrade;
    }
    return highest;
}

function lowestGrade(array)
{
    let lowest = array[0].grade;
    for (let element of array)
    {
        let elementGrade = parseFloat(element.grade);
        if (elementGrade < lowest) lowest = elementGrade;
    }
    return lowest;
}

// Toon lijst met studenten en hun punten voor elk vak
function showResults()
{
    studentOverview.innerHTML = '';

    for (let stud of students)
    {
        // Voeg naam van student toe aan lijst
        let studentName = document.createElement('h1');
        studentName.innerText = `${stud.name}`;
        studentOverview.appendChild(studentName);

        // Tabel met punten aanmaken
        let studentList = document.createElement('table');

        // Hoofding van tabel aanmaken
        let heading = document.createElement('tr');
        heading.innerHTML = `<th>Vak</th><th>Punten</th>`;
        studentList.appendChild(heading);

        // Vakken en punten van student aan tabel toevoegen
        for (let c of stud.courses)
        {
            let courseListItem = document.createElement('tr');
            courseListItem.innerHTML = `<td>${c.title}</td><td>${c.grade}</td>`;
            studentList.appendChild(courseListItem);
        }
        
        // Gemiddelde punten toevoegen
        let average = document.createElement('tr');
        average.innerHTML = `<td><strong>Gemiddelde score</strong></td><td>${averageGrade(stud.courses)}</td>`;
        studentList.appendChild(average);

        // Hoogste punten toevoegen
        let highest = document.createElement('tr');
        highest.innerHTML = `<td><strong>Hoogste score</strong></td><td>${highestGrade(stud.courses)}</td>`;
        studentList.appendChild(highest);

        // Laagste punten toevoegen
        let lowest = document.createElement('tr');
        lowest.innerHTML = `<td><strong>Laagste score</strong></td><td>${lowestGrade(stud.courses)}</td>`;
        studentList.appendChild(lowest);

        studentOverview.appendChild(studentList);
    }
}

addGrade.addEventListener('click', () =>
    {
        // Controleer of punten tussen 0 en 20 liggen
        if (grade.value >= 0 && grade.value <= 20)
        {
            let studentExists = false;

            for (let stud of students)
            {
                // Als de student al bestaat, voeg het vak en de punten toe aan de bestaande student
                if (stud.name === student.value)
                {
                    let courseExists = false;

                    // Als student al punten heeft voor dat vak, verander de punten van dat vak
                    for (let c of stud.courses)
                    {
                        if(c.title === course.value)
                        {
                            c.grade = grade.value;
                            courseExists = true;
                        }
                    }

                    // Als de student nog geen punten heeft voor dat vak, voeg het vak met de punten toe
                    if (!courseExists)
                    {
                        stud.courses.push({title: course.value, grade: grade.value});
                    }

                    studentExists = true;
                }
            }

            // Als de student nog niet bestaat, maak een nieuwe student aan met het vak en de punten
            if (!studentExists)
            {
                students.push({name: student.value, courses: [{title: course.value, grade: grade.value}]});
            }

            showResults();

            // Invoervelden leegmaken
            course.value = '';
            grade.value = '';
        }
    }, false);