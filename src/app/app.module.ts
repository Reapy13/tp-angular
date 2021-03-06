import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { PatientComponent } from './components/patient/patient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { PraticienComponent } from './components/praticien/praticien.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';



const routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'praticien',
        component : PraticienComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'patient',
        component: PatientComponent
    }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PraticienComponent,
    AdminComponent,
    PatientComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
