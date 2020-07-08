import { Component, OnInit } from '@angular/core';

import  {Praticien} from "../../model/praticien";


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  filtre: string = '';

    // create an array of objects
    PratitienList: Array<Praticien> = [
      new Praticien( "Anup", "Kumar", ["Dentiste"], ["Rue Brancion"]),
      new Praticien( "John", "Doe", ["Ophtalmologue"], ["Rue Didot"]),
     new Praticien("Claire", "Murphy", ["Dentiste"], ["Rue convention"]),
     new Praticien("Mai", "Truong", ["Ophtalmologue"], ["Boulevard lefevre"])
    ];

  constructor() { }

  ngOnInit(): void {
  }

  public hasToBeShown(praticien: Praticien) {
    return praticien.prenom.toLowerCase().includes(this.filtre.toLowerCase())
     || praticien.nom.toLowerCase().includes(this.filtre.toLowerCase())
    }

    public prendreRdv(id: number) {
  
   }

}
