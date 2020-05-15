import { RessourceService } from './../../services/ressource.service';
import { PrestationAddedComponent } from './../prestation-added/prestation-added.component';
import {  MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { PrestationService } from 'src/app/services/prestation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.css']
})
export class AddPrestationComponent {


   constructor(private ressourceService: RessourceService, private dialog: MatDialog) { }

//   onAddPrestation(value: any) {
//     this.ressourceService.saveRessource(this.ressourceService.host + '/prestations', value)
//     .subscribe(res => {
//     }, err => {
//       console.log(err);
//     });
//   }

//   openAddedPrestationDialog(){
//     const dialogRef= this.dialog.open(PrestationAddedComponent,{
//       width: '700px',
//       data: {}
//     });
//     // this.dialog.afterClosed().subscribe(result =>{
//     //   console.log(`le resultat est: ${result}`)

//     // });


//   }



 }
