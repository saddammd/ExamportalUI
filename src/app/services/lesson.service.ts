import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonResponse } from '../classes/lesson-response';
import { Data } from '../classes/data';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpclient: HttpClient) { }

  private baseUrl = "http://localhost:5000/examportal/examportal/lesson"

  getLessonList(): Observable<Data>{
      return this.httpclient.get<Data>(this.baseUrl);
   
  }
}
