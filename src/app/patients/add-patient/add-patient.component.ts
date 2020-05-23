import { Router } from '@angular/router';
import { ShowPatientsComponent } from './../show-patients/show-patients.component';
import { PatientService } from './../../services/patient.service';
import { RessourceService } from './../../services/ressource.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, RequiredValidator, FormBuilder } from '@angular/forms';
import { PatientAddedComponent } from '../patient-added/patient-added.component';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})

export class AddPatientComponent implements OnInit{
  patientForm = new FormGroup({


  });

  constructor(private dialog: MatDialog,
              private ressourceService: RessourceService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      nom: ['ae', Validators.required] ,
      prenom: ['aza', Validators.required],
      mutuel: [''],
      tel: ['0232232323', Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$')],
      date_naissance: ['', Validators.required],
      identification: [''],
      typeId: [''],
      sexe: ['', Validators.required],
      adresse: ['fefef', Validators.required],
      email: ['ffef@feef.fe', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
    })
  }

   onAddPatient() {
     console.log(this.patientForm.value);
     this.patientForm.value.mutuel = JSON.parse('{"id":' + this.patientForm.value.mutuel + ' }');
     this.ressourceService.saveRessource(this.ressourceService.host + 'patients', this.patientForm.value)
    .subscribe(res => {
      //how to call a function from another component
          }, err => {
      console.log(err);
    });
   }

    openAddedPatientDialog(){
      const dialogRef = this.dialog.open(PatientAddedComponent,{
        width: '700px',
        data: {}
      });

  }
}
