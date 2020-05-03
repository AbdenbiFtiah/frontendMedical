import { PrestationAddedComponent } from './prestations/prestation-added/prestation-added.component';
import { ShowPrestationComponent } from './prestations/show-prestation/show-prestation.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPrestationComponent } from './prestations/add-prestation/add-prestation.component';
import { ShowPatientsComponent } from './patients/show-patients/show-patients.component';



const routes: Routes = [
  {path: '', redirectTo: 'prestations', pathMatch: 'full'},
  {path: 'Prestations', component: ShowPrestationComponent},
  {path: 'Patients', component: ShowPatientsComponent},
  // {path: 'add-prestation', component: AddPrestationComponent},
  // {path: 'prestationAdded', component: PrestationAddedComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
