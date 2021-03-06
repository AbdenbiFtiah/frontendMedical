import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidnavListComponent } from './navigation/sidnav-list/sidnav-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowPrestationComponent } from './prestations/show-prestation/show-prestation.component';
import { AddPrestationComponent } from './prestations/add-prestation/add-prestation.component';
import { PrestationAddedComponent } from './prestations/prestation-added/prestation-added.component';
import { ShowPatientsComponent } from './patients/show-patients/show-patients.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AddRendezVousComponent } from './rendezVous/add-rendez-vous/add-rendez-vous.component';
import { PatientAddedComponent } from './patients/patient-added/patient-added.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidnavListComponent,
    ShowPrestationComponent,
    AddPrestationComponent,
    PrestationAddedComponent,
    ShowPatientsComponent,
    AddPatientComponent,
    FooterComponent,
    AddRendezVousComponent,
    PatientAddedComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
      AddPrestationComponent,
      PrestationAddedComponent,
      AddPatientComponent,
      PatientAddedComponent]
})
export class AppModule { }
