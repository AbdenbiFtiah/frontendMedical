import { PrestationService } from 'src/app/services/prestation.service';
import { AddPrestationComponent } from './../add-prestation/add-prestation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Prestation } from './../../models/prestation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RessourceService } from 'src/app/services/ressource.service';

@Component({
  selector: 'app-show-prestation',
  templateUrl: './show-prestation.component.html',
  styleUrls: ['./show-prestation.component.css'],
})
export class ShowPrestationComponent implements OnInit {
  displayedColumns: string[] = [
    'reference',
    'nom_etablissement',
    'nom_medecin',
    'intervention',
    'date_intervention',
    'montant',
  ];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private prestationService: PrestationService,
              private ressourceService: RessourceService,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.prestationService.getPrestations()
    // .subscribe(data => {
    //   this.prestations = data   ;
    // }, err => {
    //   console.log(err);
    // });

    this.prestationService.getPrestations().subscribe((data) => {
        this.dataSource = new MatTableDataSource<Prestation>(data._embedded.prestations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // searchByReference(form) {
  //   console.log(form.keyword);
  //   this.prestationService
  //     .getPrestationByReference(form.keyword, 0, 5)
  //     .subscribe(
  //       (data) => {
  //         this.prestations = data;
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  openPrestationDialog(){
    const dialogRef= this.dialog.open(AddPrestationComponent,{
      width: '700px',
      data: {}
    })

  }

  onDeletePrestation(prestation) {
    console.log(prestation);
    this.ressourceService
      .deleteRessource(prestation._links.self.href)
      .subscribe(
        (data) => {
          this.dataSource = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
