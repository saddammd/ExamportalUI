import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../classes/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private baseUrl =  "http://localhost:5000/examportal/result/result"

  constructor(private httpclient: HttpClient) { }
 
 
  getResultList(): Observable<any>{
    return this.httpclient.get<any>(this.baseUrl); 
    
}

postResultList(result: Result[]): Observable<any>{
  return this.httpclient.post<any>(this.baseUrl, result); 
  
}

}
