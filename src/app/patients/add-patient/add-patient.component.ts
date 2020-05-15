import { RessourceService } from './../../services/ressource.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})

export class AddPatientComponent {
  patientForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    mutuel: new FormControl(''),
    tel: new FormControl(''),
    date_naissance: new FormControl(''),
    identification: new FormControl(''),
    typeId: new FormControl(''),
    sexe: new FormControl(''),
    adresse: new FormControl(''),
    email: new FormControl(''),


  });

  constructor(private ressourceService : RessourceService) {}

   onAddPatient() {
     console.log(this.patientForm.value);
     this.patientForm.value.mutuel = JSON.parse("{\"id\":"+this.patientForm.value.mutuel+" }");
    this.ressourceService.saveRessource(this.ressourceService.host + '/patients',this.patientForm.value)
    .subscribe(res => {
    }, err => {
      console.log(err);
    });
   }

  //   openAddedPrestationDialog(){
  //     const dialogRef= this.dialog.open(PrestationAddedComponent,{
  //       width: '700px',
  //       data: {}
  //     });

  // }
}
