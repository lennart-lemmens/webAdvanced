import { Voertuig } from "./voertuig.js";

export class Motor extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, cilinderinhoud, type) {
        super(merk, model, jaar, verhuurPrijs);
        this.cilinderinhoud = cilinderinhoud;
        this.type = type;
    }

    verhuur() {
        this.beschikbaar = false;
        return `Motor van het type ${this.type} met een inhoud van ${this.cilinderinhoud} cc is verhuurd.`;
    }
}