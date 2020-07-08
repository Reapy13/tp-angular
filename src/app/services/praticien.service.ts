import { Injectable } from '@angular/core';
import {Praticien} from '../model/praticien';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {

    praticiens: Array<Praticien>;

    constructor(private http: HttpClient) {
        this.load();
    }

    load(): void {
        this.http.get<Array<Praticien>>('http://localhost:3000/praticiens').subscribe(resp => this.praticiens = resp, error => console.log(error));
    }

    getAllPraticiens(): Array<Praticien> {
        return this.praticiens;
    }

    createPraticien(praticien: Praticien): void {
        this.http.post<Praticien>('http://localhost:3000/praticiens', praticien).subscribe(() => this.load(), error => console.log(error));
    }

    updatePraticien(praticien: Praticien): void {
        this.http.put<Praticien>('http://localhost:3000/praticiens/' + praticien.id, praticien).subscribe(() => this.load(), error => console.log(error));
    }

    deletePraticien(id: number): void {
        this.http.delete('http://localhost:3000/praticiens/' + id).subscribe(() => this.load(), error => console.log(error));
    }

}
