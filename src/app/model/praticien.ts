export class Praticien {
    id: number;
    prenom: string;
    nom: string;
    specialites: Array<string>;
    consultLocations: Array<string>;

    constructor(prenom: string, nom: string, specialites?: Array<string>, consultLocations?: Array<string>) {
        this.prenom = prenom;
        this.nom = nom;
        this.specialites = specialites;
        this.consultLocations = consultLocations;
    }

    clone(): Praticien {
        let praticienTmp: Praticien = new Praticien(this.prenom, this.nom);
        praticienTmp.specialites = this.specialites;
        praticienTmp.consultLocations = this.consultLocations;
        return praticienTmp;
    }
}
