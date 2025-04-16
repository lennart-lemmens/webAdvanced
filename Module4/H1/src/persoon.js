export class Persoon {
    constructor(naam, email, leeftijd) {
        this.naam = naam;
        this._email = '';
        this.email = email;
        this._leeftijd = 0;
        this.leeftijd = leeftijd;
    }

    get leeftijd() {
        return this._leeftijd;
    }

    set leeftijd(getal) {
        if (getal >= 0 && getal < 150) {
            this._leeftijd = getal;
        } else {
            throw new Error('Ongeldige leeftijd.');
        }
    }

    get email() {
        return this._email;
    }

    set email(adres) {
        if (String(adres)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            this._email = adres;
        } else {
            throw new Error("Ongeldig e-mailadres.")
        }
    }
}