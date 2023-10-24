import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LessonResponse } from '../classes/lesson-response';
import { Data } from '../classes/data';
import { chapter } from '../classes/chapter';
import { Lesson } from '../classes/lesson';
import { Addmcq } from '../classes/addmcq';
import { Reading } from '../classes/reading';
import { Vocabulary } from '../classes/vocabulary';
import { Vocabularyetoj } from '../classes/vocabularyetoj';
import { Addreading } from '../classes/addreading';
import { Addvocabularyetoj } from '../classes/addvocabularyetoj';
import { Addvocabularyjtoe } from '../classes/addvocabularyjtoe';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
 
  

  
  
  constructor(private httpclient: HttpClient) { }

  private baseUrl = "http://localhost:5000/examportal/examportal/lesson"
  private videoUrl = "http://localhost:5000/examportal/videos/video"
  private mcqurl = "http://localhost:5000/examportal/mcq/mcq"
  private readingurl = "http://localhost:5000/examportal/reading/reading/${id}?id="
  private basereadingurl = "http://localhost:5000/examportal/reading/reading/"
  private vocabularyurl = "http://localhost:5000/examportal/vocabulary/vocabulary/${id}?id="
  private basevocabularyurl = "http://localhost:5000/examportal/vocabulary/vocabulary/"
  private vocabularyEtoJurl = "http://localhost:5000/examportal/vocabularyEtoJ/vocabularyEtoJ/${id}?id="
  private basevocabularyEtoJurl = "http://localhost:5000/examportal/vocabularyEtoJ/vocabularyEtoJ/"

  getLessonList(): Observable<Data>{
      return this.httpclient.get<Data>(this.baseUrl);
  }

  postLesson(name: chapter) {
    // Make the POST request to your API
    return this.httpclient.post(this.baseUrl, name);
  }

  putLesson(editChapterName: chapter) {
  return this.httpclient.put(this.baseUrl, editChapterName);
  
  }

  postVideo(lesson: Lesson) {
    return this.httpclient.post(this.videoUrl, lesson);
  }

  postMcq(addmcq: Addmcq) :Observable<Addmcq> {
  return this.httpclient.post<Addmcq>(this.mcqurl, addmcq);
  }

  postReading(addreading: Addreading)  :Observable<Addreading> {
    return this.httpclient.post<Addreading>(this.basereadingurl, addreading);
  }

  postVocabularyEtoJ(addvocabularyetoj: Addvocabularyetoj) :Observable<Addvocabularyetoj> {
    return this.httpclient.post<Addvocabularyetoj>(this.basevocabularyEtoJurl, addvocabularyetoj);
  }

  postVocabularyJtoE(addvocabularyjtoe: Addvocabularyjtoe) :Observable<Addvocabularyjtoe>{
    return this.httpclient.post<Addvocabularyjtoe>(this.basevocabularyurl, addvocabularyjtoe);
  }

  getMcqByLessonId(id:number){
    return this.httpclient.get(this.mcqurl + "/" +id);
  }

  getReadingByLessonId(id:number){
    return this.httpclient.get<Reading>(this.readingurl +id);
  }

  getVocabularyJtoEByLessonId(id:number){
    return this.httpclient.get<Vocabulary[]>(this.vocabularyurl +id);
  }

  getVocabularyEtoJByLessonId(id:number){
    return this.httpclient.get<Vocabularyetoj[]>(this.vocabularyEtoJurl +id);
  }
}
