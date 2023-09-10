import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private baseUrl = "http://localhost:5000/examportal/examportal/"

  constructor(private httpclient: HttpClient) { }
 
 
  getResultList(): Observable<any>{
    return this.httpclient.get<any>(this.baseUrl); 
    
}

}
