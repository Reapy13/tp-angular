export class Praticien {

    civilite: string;
    nom: string;
    prenom: string;
    specialite: string;
    adresse: string;
  
    constructor(civilite?: string, nom?: string, prenom?: string, specialite?: string, adresse?: string) {
      this.civilite = civilite;
      this.nom = nom;
      this.prenom = prenom;
      this.specialite = specialite;
      this.adresse = adresse;
    }
}
