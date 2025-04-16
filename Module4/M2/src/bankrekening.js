export class Bankrekening {
    constructor(rekeningnummer, eigenaar, saldo) {
        this._rekeningnummer = rekeningnummer;
        this._eigenaar = eigenaar;
        this._saldo = 0;
        this.saldo = saldo;
    }

    get rekeningnummer() {
        return this._rekeningnummer;
    }

    get eigenaar() {
        return this._eigenaar;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(bedrag) {
        if (bedrag >= 0) {
            this._saldo = bedrag.toFixed(2);
        } else {
            throw new Error('Saldo mag niet onder nul gaan.');
        }
    }

    storten(bedrag) {
        if (bedrag >= 0) {
            this._saldo += bedrag;
        } else {
            throw new Error('Kan geen negatief bedrag toevoegen.');
        }
    }

    opnemen(bedrag) {
        if (this._saldo - bedrag >= 0) {
            this._saldo -= bedrag;
        } else {
            throw new Error('Saldo is ontoereikend.');
        }
    }

    get overzicht() {
        return `Rekeningnummer: ${this.rekeningnummer}, eigenaar: ${this.eigenaar}, saldo: € ${this.saldo}`;
    }

    static rekeningNrGenerator() {
        let rekNr = "BE" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

        for (let cijferblok = 0; cijferblok < 3; cijferblok++) {
            let blok = " ";
            for (let cijfer = 0; cijfer < 4; cijfer++) {
                blok += Math.floor(Math.random() * 10);
            }
            rekNr += blok;
        }

        return rekNr;
    }

    static validerenTransactie(from, to, bedrag) {
        return (bedrag >= 0 && from.saldo - bedrag >= 0) ? true : false;
    }

    static transactie(from, to, bedrag) {
        if (this.validerenTransactie(from, to, bedrag)) {
            from.opnemen(bedrag);
            to.storten(bedrag);
        } else {
            throw new Error("Kan transactie niet uitvoeren.");
        }
    }
}