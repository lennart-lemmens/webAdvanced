import { Persoon } from "./persoon.js";

export class Student extends Persoon {
    constructor(naam, email, leeftijd, studentnummer, studiejaar) {
        super(naam, email, leeftijd);
        this.studentnummer = studentnummer;
        this.studiejaar = studiejaar;
    }

    static zoekOpStudentnummer(nummer, studenten) {
        for (let student of studenten) {
            if (student.studentnummer === nummer) {
                return student;
            }
        }
        throw new Error("Student niet gevonden.")
    }
}