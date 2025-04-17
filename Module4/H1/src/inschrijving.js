export class Inschrijving {
    constructor(student, cursus, inschrijvingsdatum, status = "actief", beoordeling = "niet beoordeeld") {
        this.student = student;
        this.cursus = cursus;
        this.inschrijvingsdatum = inschrijvingsdatum;
        this._status = "actief";
        this.status = status;
        this._beoordeling = "niet beoordeeld";
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
        if ((waarde >= 0 && waarde <= 20) || waarde === "niet beoordeeld") {
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