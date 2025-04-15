export class Voertuig {
    constructor(merk, model, jaar, verhuurPrijs) {
        this.merk = merk;
        this.model = model;
        this.jaar = jaar;
        this.verhuurPrijs = verhuurPrijs;
        this.beschikbaar = true;
    }

    verhuur() {
        this.beschikbaar = false;
        return 'Voertuig is verhuurd.';
    }

    retourneer() {
        this.beschikbaar = true;
        return 'Voertuig is geretourneerd.';
    }
}