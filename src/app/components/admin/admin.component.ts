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

    editPraticien(praticien: Praticien): void {
        this.http.put<Praticien>('http://localhost:3000/praticiens/' + praticien.id, praticien).subscribe(() => this.praticienService.load(), error => console.log(error));
    }



}
