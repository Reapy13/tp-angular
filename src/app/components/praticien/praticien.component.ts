import { Component, OnInit } from '@angular/core';
import {Praticien} from '../../model/praticien';
import {PraticienService} from '../../services/praticien.service';

@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.css']
})
export class PraticienComponent implements OnInit {

    praticienTmp: Praticien = new Praticien('', '');

    praticienEdited: Praticien;
    specialiteEdited: string;
    locationEdited: string;
    motifEdited: string;

    showAdd: boolean = false;
    showEdit: boolean = false;

    constructor(private praticienService: PraticienService) { }

    ngOnInit(): void {
    }

    findAll(): Array<Praticien> {
        return this.praticienService.getAllPraticiens();
    }

    addPraticien(): void {
        this.praticienService.createPraticien(this.praticienTmp);
        this.clearAddForm();
    }

    clearAddForm(): void {
        this.praticienTmp = new Praticien('', '');
    }

    editPraticien(praticien: Praticien) {
        this.praticienEdited = new Praticien(praticien.prenom, praticien.nom);
        this.praticienEdited.specialites = new Array<string>();
        this.praticienEdited.consultLocations = new Array<string>();
        this.praticienEdited.motifs = new Array<string>();
        if (praticien.specialites) {
            praticien.specialites.forEach(value => this.praticienEdited.specialites.push(value));
        }
        if (praticien.consultLocations) {
            praticien.consultLocations.forEach(value => this.praticienEdited.consultLocations.push(value));
        }
        if (praticien.motifs) {
            praticien.motifs.forEach(value => this.praticienEdited.motifs.push(value));
        }
        this.praticienEdited.id = praticien.id;
            this.showEdit = true;
    }

    launchEdit() {
        if (this.specialiteEdited) {
            this.praticienEdited.specialites.push(this.specialiteEdited);
        }
        if (this.locationEdited) {
            this.praticienEdited.consultLocations.push(this.locationEdited);
        }
        if (this.motifEdited) {
            this.praticienEdited.motifs.push(this.motifEdited);
        }
        this.praticienService.updatePraticien(this.praticienEdited);
        this.showEdit = false;
        this.praticienEdited = new Praticien('', '', new Array<string>(), new Array<string>());
        this.specialiteEdited = null;
        this.locationEdited = null;
        this.motifEdited = null;
    }

    deletePraticien(id: number) {
        this.praticienService.deletePraticien(id);
    }

    addButtonLabel(): string {
        return this.showAdd ? '-' : '+';
    }
}
