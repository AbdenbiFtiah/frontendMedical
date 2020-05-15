import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-rendez-vous',
  templateUrl: './add-rendez-vous.component.html',
  styleUrls: ['./add-rendez-vous.component.css']
})
export class AddRendezVousComponent {

  constructor() { }
  rendezVousForm = new FormGroup({
    date : new FormControl(),
    nom: new FormControl(),
    details: new FormControl()
  });

  onSubmit(){
    console.log(this.rendezVousForm.value);

  }



}
