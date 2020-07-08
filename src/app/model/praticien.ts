export class Praticien {
    id: number;
    prenom: string;
    nom: string;
    specialites: Array<string> = new Array<string>();
    consultLocations: Array<string> = new Array<string>();

    constructor(prenom: string, nom: string, specialites?: Array<string>, consultLocations?: Array<string>) {
        this.prenom = prenom;
        this.nom = nom;
        this.specialites = specialites;
        this.consultLocations = consultLocations;
    }
}
