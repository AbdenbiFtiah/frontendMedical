import { AddPatientComponent } from './../add-patient/add-patient.component';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/models/patient';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-show-patients',
  templateUrl: './show-patients.component.html',
  styleUrls: ['./show-patients.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),])]
})
export class ShowPatientsComponent implements OnInit {

  displayedColumns = [
    'nom',
    'prenom',
    'tel',
    'adresse',
    'date_naissance',
  ];

  dataSource;
  expandedElement: Patient | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
      private ressourceService: RessourceService,
      private patientService: PatientService,
      private dialog: MatDialog) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Patient>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;},
    (err) => {
      console.log(err);
    }
  );

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openPatientDialog(){
    const dialogRef = this.dialog.open(AddPatientComponent,{width: '700px',data: {}});
  }
  deletePatient(patient: Patient){
      this.ressourceService.deleteRessource(this.ressourceService.host +'patients/'+ patient.id).subscribe(res => {
      this.dataSource=this.patientService.getPatients();
      console.log(patient);

      }, err => {
        console.log(err);
      });


    }

  updatePatient(){

  }

}
