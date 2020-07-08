import { Injectable } from '@angular/core';
import {Admin} from '../model/admin';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    admins: Array<Admin>;

    constructor(private http: HttpClient) { }

    load(): void {
        this.http.get<Array<Admin>>('http://localhost:3000/admins').subscribe(resp => this.admins = resp, error => console.log(error));
    }

    createAdmin(admin: admin): void {
        this.http.post<Admin>('http://localhost:3000/admins', admin).subscribe(() => {
            this.load();
        });
    }
}
