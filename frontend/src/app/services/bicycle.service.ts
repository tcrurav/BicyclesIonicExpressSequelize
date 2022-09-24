import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  endPoint = "http://localhost:8080/api/bicycles";

  constructor(private httpClient: HttpClient) { }

  getBicycles(){
    return this.httpClient.get(this.endPoint);
  }
}
