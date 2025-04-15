import { Voertuig } from "./voertuig.js";

export class Auto extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, aantalDeuren, brandstofType) {
        super(merk, model, jaar, verhuurPrijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstofType = brandstofType;
    }

    verhuur() {
        this.beschikbaar = false;
        return `De ${this.brandstofType}auto met ${this.aantalDeuren} deuren is verhuurd.`;
    }


}