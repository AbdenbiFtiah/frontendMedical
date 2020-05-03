import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPrestationComponent } from '../add-prestation/add-prestation.component';

@Component({
  selector: 'app-prestation-added',
  templateUrl: './prestation-added.component.html',
  styleUrls: ['./prestation-added.component.css']
})
export class PrestationAddedComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPrestationDialog(){
    const dialogRef= this.dialog.open(AddPrestationComponent,{
      width: '700px',
      data: {}
    })

  }

}
