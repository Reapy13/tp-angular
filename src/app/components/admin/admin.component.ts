import { Component, OnInit } from '@angular/core';
import {Praticien} from "../../model/praticien";
import {PraticienService} from "../../services/praticien.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
praticienTmp = new Praticien('', '');
  constructor(private praticienService: PraticienService) {
  }

  ngOnInit(): void {
  }
}
