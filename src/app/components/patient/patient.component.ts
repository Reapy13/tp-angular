import { Component, OnInit } from '@angular/core';

import  {Praticien} from "../../model/praticien";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  filter: string = '';

    // create an array of objects
    PratitienList: Praticien[] = [
      new Praticien("M", "Anup", "Kumar", "Dentiste", "Rue Brancion"),
      new Praticien("M", "John", "Doe", "Ophtalmologue", "Rue Didot"),
      new Praticien("Mme","Claire", "Murphy", "Dentiste", "Rue convention"),
      new Praticien("M","Mai", "Truong", "Ophtalmologue", "Boulevard lefevre")
    ];

  constructor() { }

  ngOnInit(): void {
  }

  public hasToBeShown(praticien: Praticien) {
    return praticien.prenom.toLowerCase().includes(this.filter.toLowerCase())
    || praticien.nom.toLowerCase().includes(this.filter.toLowerCase())
    || praticien.specialite.toLowerCase().includes(this.filter.toLowerCase())
    || praticien.adresse.toLowerCase().includes(this.filter.toLowerCase());;
    }

    public prendreRdv(id: number) {
  
  //    this.stagiaireService.find(id).subscribe(resp => {
  //      this.stagiaireForm = resp;
  //      if (!this.stagiaireForm.formateur) {
  //        this.stagiaireForm.formateur = new Formateur();
  //      }
  //    }, error => console.log(error));
   }

}
