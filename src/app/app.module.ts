import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidnavListComponent } from './navigation/sidnav-list/sidnav-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowPrestationComponent } from './prestations/show-prestation/show-prestation.component';
import { AddPrestationComponent } from './prestations/add-prestation/add-prestation.component';
import { PrestationAddedComponent } from './prestations/prestation-added/prestation-added.component';
import { ShowPatientsComponent } from './patients/show-patients/show-patients.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AddRendezVousComponent } from './rendezVous/add-rendez-vous/add-rendez-vous.component';




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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ AddPrestationComponent, PrestationAddedComponent, AddPatientComponent]
})
export class AppModule { }
