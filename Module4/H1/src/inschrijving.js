export class Inschrijving {
    constructor(student, cursus, inschrijvingsdatum, status = "actief", beoordeling = "") {
        this.student = student;
        this.cursus = cursus;
        this.inschrijvingsdatum = inschrijvingsdatum;
        this._status = "actief";
        this.status = status;
        this._beoordeling = "";
        this.beoordeling = beoordeling;
    }

    get status() {
        return this._status;
    }

    set status(status) {
        if (["actief", "voltooid", "geannuleerd"].includes(status)) {
            this._status = status;
        } else {
            throw new Error("Ongeldige status.");
        }
    }

    get beoordeling() {
        return this._beoordeling;
    }

    set beoordeling(waarde) {
        if ((parseInt(waarde) >= 0 && parseInt(waarde) <= 20) || waarde === "") {
            this._beoordeling = waarde;
        } else {
            throw new Error("Beoordeling moet tussen 0 en 20 liggen.");
        }
    }

    static controleerDubbele(student, cursus, inschrijvingen) {
        for (let inschrijving of inschrijvingen) {
            if (inschrijving.student === student && inschrijving.cursus === cursus) {
                return true;
            }
        }
        return false;
    }
}