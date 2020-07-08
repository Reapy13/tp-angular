import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { PraticienComponent } from './components/praticien/praticien.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const routes = [
  {
    path : '',
    component : HomeComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PraticienComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
