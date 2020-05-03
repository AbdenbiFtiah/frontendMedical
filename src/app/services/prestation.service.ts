import { Prestation } from './../models/prestation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  host='http://localhost:8090';

  constructor(private httpClient: HttpClient) {}


  public getPrestations(): Observable<Prestation[]>{
    return this.httpClient.get<Prestation[]>(this.host + '/prestations');
  }

  
  // getPrestationByReference(keyword: string, page: number, size: number){
  //  return this.httpClient.get(this.host+"/search/byReferencePage?mc="+keyword+"&page="+page+"&size="+size);

  // }


}

