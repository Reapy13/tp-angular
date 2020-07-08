import { Component, OnInit } from '@angular/core';
import {Praticien} from '../../model/praticien';
import {PraticienService} from '../../services/praticien.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
praticienTmp = new Praticien('', '');
  constructor(private praticienService: PraticienService, private http: HttpClient) {
  }

    praticiens: Array<Praticien>;
    praticienEdited: Praticien;
    specialiteEdited: string;
    locationEdited: string;
    motifEdited: string;
    showEdit: boolean = false;


    ngOnInit(): void {
  }

    load(): void {
        this.http.get<Array<Praticien>>('http://localhost:3000/praticiens').subscribe(resp => this.praticiens = resp, error => console.log(error));
    }

    findAll(): Array<Praticien> {
        return this.praticienService.getAllPraticiens();
    }

    deletePraticien(id: number): void {
        this.http.delete('http://localhost:3000/praticiens/' + id).subscribe(() => this.praticienService.load(), error => console.log(error));
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



}
