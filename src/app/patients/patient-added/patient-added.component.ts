import { PatientService } from './../../services/patient.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AddPatientComponent } from '../add-patient/add-patient.component';

@Component({
  selector: 'app-patient-added',
  templateUrl: './patient-added.component.html',
  styleUrls: ['./patient-added.component.css']
})
export class PatientAddedComponent {

  constructor(private dialog : MatDialog) { }


  openPatientDialog(){
    const dialogRef = this.dialog.open(AddPatientComponent,{width: '700px',data: {}});
  }
}
