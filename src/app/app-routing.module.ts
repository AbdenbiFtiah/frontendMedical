import { LoginComponent } from './login/login.component';
import { AddRendezVousComponent } from './rendezVous/add-rendez-vous/add-rendez-vous.component';
import { PrestationAddedComponent } from './prestations/prestation-added/prestation-added.component';
import { ShowPrestationComponent } from './prestations/show-prestation/show-prestation.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPatientsComponent } from './patients/show-patients/show-patients.component';



const routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'Prestations', component: ShowPrestationComponent},
  {path: 'Patients', component: ShowPatientsComponent},
  {path: 'RendezVous', component: AddRendezVousComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Inscription', redirectTo: ''},



  // {path: 'add-prestation', component: AddPrestationComponent},
  // {path: 'prestationAdded', component: PrestationAddedComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
