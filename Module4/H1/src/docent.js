import { Persoon } from "./persoon.js";

export class Docent extends Persoon {
    constructor(naam, email, leeftijd, vakgebied, aanstellingsdatum) {
        super(naam, email, leeftijd);
        this.vakgebied = vakgebied;
        this.aanstellingsdatum = aanstellingsdatum;
    }
}