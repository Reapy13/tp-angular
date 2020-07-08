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
    showAdd: boolean = false;

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
        this.praticienEdited = praticien.clone();
    }

    deletePraticien(id: number) {
        this.praticienService.deletePraticien(id);
    }

    addButtonLabel(): string {
        return this.showAdd ? '-' : '+';
    }
}
