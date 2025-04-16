export class Cursus {
    constructor(titel, beschrijving, docent, ects, maximumStudenten) {
        this.titel = titel;
        this.beschrijving = beschrijving;
        this.docent = docent;
        this.ects = ects;
        this._maximumStudenten = 0;
        this.maximumStudenten = maximumStudenten;
    }

    get maximumStudenten() {
        return this._maximumStudenten;
    }

    set maximumStudenten(waarde) {
        if (waarde >= 0) {
            this._maximumStudenten = waarde;
        } else {
            throw new Error("Maximum aantal studenten mag niet negatief zijn.");
        }
    }

    static zoekOpTitel(titel, cursussen) {
        for (let cursus of cursussen) {
            if (cursus.titel === titel) {
                return cursus;
            }
        }
        throw new Error("Cursus niet gevonden.");
    }
}