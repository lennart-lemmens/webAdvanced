import { Bankrekening } from "./bankrekening.js";

export class Spaarrekening extends Bankrekening {
    constructor(rekeningnummer, eigenaar, saldo, rentepercentage) {
        super(rekeningnummer, eigenaar, saldo);
        this.rentepercentage = rentepercentage;
    }

    renteToevoegen() {
       this.saldo *= (1 + this.rentepercentage);
    }
}