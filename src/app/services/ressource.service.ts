import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  host='http://localhost:8090';

  constructor(private httpClient: HttpClient) {}

  saveRessource(url,data){
    return this.httpClient.post(url,data);
  }

  
deleteRessource(url){
    return this.httpClient.delete(url);

  }
}
