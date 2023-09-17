import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Result } from '../classes/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private baseUrl =  "http://localhost:5000/examportal/result/result"
  private resultCollectionURL = "http://localhost:5000/examportal/resultCollection/result/"
  private resultdetailsurl = "http://localhost:5000/examportal/resultCollection/resultdetails/"
  openDialog = new BehaviorSubject<boolean>(null!);
  score = new BehaviorSubject<number>(null!);
  totalquestions = new BehaviorSubject<number>(null!);

  constructor(private httpclient: HttpClient) { }
 
 
  getResultList(id:number): Observable<any>{
    return this.httpclient.get<any>(this.resultCollectionURL+id); 
    
}

postResultList(result: Result[]): Observable<any>{
  return this.httpclient.post<any>(this.baseUrl, result); 
  
}


getResultDetailList(id:number): Observable<any>{
  return this.httpclient.get<any>(this.resultdetailsurl+id); 
}

}
