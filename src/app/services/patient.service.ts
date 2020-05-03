import { Patient } from './../models/patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  host= 'http://localhost:8090';

  constructor(private httpClient: HttpClient) {}


  public getPatients(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(this.host + '/patients');
  }



}

