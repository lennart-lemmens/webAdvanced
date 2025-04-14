export class Product {
    constructor (naam, prijs, voorraad) {
        this.naam = naam;
        this._prijs = 0;
        this.prijs = prijs;
        this._voorraad = 0;
        this.voorraad = voorraad;
    }

    set prijs(value) {
        if (value >= 0) {
            this._prijs = value;
        } else {
            throw new Error('Prijs mag niet lager zijn dan 0.');
        }
    }

    set voorraad(value) {
        if (value >= 0) {
            this._voorraad = value;
        } else {
            throw new Error('Voorraad mag niet lager zijn dan 0.');
        }
    }

    get prijs() {
        return this._prijs.toFixed(2);
    }

    get voorraad() {
        return this._voorraad;
    }

    get verkoopprijs() {
        return (this._prijs * 1.21).toFixed(2);
    }

    get beschikbaar() {
        return this._voorraad > 0 ? true : false;
    }

    toonProduct() {
        return `<ul>
        <li>Naam: ${this.naam}</li>
        <li>Prijs: € ${this.prijs}</li>
        <li>Verkoopprijs: € ${this.verkoopprijs}</li>
        <li>Beschikbaarheid: ${this.beschikbaar}</li>
        </ul>`;
    }
}