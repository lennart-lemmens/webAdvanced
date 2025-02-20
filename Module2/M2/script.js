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

    let studentList = document.createElement('ul');
    for (let stud of students)
    {
        // Voeg naam van student toe aan lijst
        let studentListItem = document.createElement('li');
        studentListItem.innerText = stud.name;

        // Voeg onder naam student de vakken en punten van student toe
        let courseList = document.createElement('ul');
        for (let c of stud.courses)
        {
            let courseListItem = document.createElement('li');
            courseListItem.innerText = `${c.title}: ${c.grade}`;
            courseList.appendChild(courseListItem);
        }
        
        // Voeg gemiddelde punten toe
        let average = document.createElement('li');
        average.innerHTML = `<strong>Gemiddelde score:</strong> ${averageGrade(stud.courses)}`;
        courseList.appendChild(average);

        // Voeg hoogste punten toe
        let highest = document.createElement('li');
        highest.innerHTML = `<strong>Hoogste score:</strong> ${highestGrade(stud.courses)}`;
        courseList.appendChild(highest);

        // Voeg laagste punten toe
        let lowest = document.createElement('li');
        lowest.innerHTML = `<strong>Laagste score:</strong> ${lowestGrade(stud.courses)}`;
        courseList.appendChild(lowest);

        studentListItem.appendChild(courseList);
        studentList.appendChild(studentListItem);
    }

    studentOverview.appendChild(studentList);
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