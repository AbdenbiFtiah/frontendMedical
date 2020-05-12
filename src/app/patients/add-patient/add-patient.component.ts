import { RessourceService } from './../../services/ressource.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  emailFormControl = new FormControl('', [Validators.email]);
  matcher = new MyErrorStateMatcher();

  constructor( private ressourceService: RessourceService, private dialog: MatDialog) { }

  onAddPatient(value: any) {
    console.log(value);
    value.mutuel = JSON.parse("{\"id\":"+value.mutuel+" }");
    value.tel=Number.parseInt("0"+""+value.tel);
    this.ressourceService.saveRessource(this.ressourceService.host + '/patients', value)
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
