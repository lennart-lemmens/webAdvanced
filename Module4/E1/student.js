export class Student {
    constructor (naam, ...vakken) {
        this.naam = naam;

        // vakken argument is optional. Infinite arguments are possible thanks to rest parameter (...)
        this.vakken = {};
        for (let vak of vakken) {
            this.vakken[vak] = 0;
        }      
    }

    voegPuntToe(vak, punt) {
        this.vakken[vak] = punt;
    }

    gemiddelde() {
        let totaalPunten = 0;
        for (let vak in this.vakken) {
            totaalPunten += this.vakken[vak];
        }
        return totaalPunten / this.vakken.length;
    }

    toonRapport() {
        let rapport = `<table><tr><th colspan=2>${this.naam}</th></tr>`;
        for (let vak in this.vakken) {
            rapport += `<tr><td>${vak}:</td><td>${this.vakken[vak]}</td></tr>`;
        }
        rapport += '</table>';
        return rapport;   
    }
}