import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Video } from '../classes/video';
import { Vocabulary } from '../classes/vocabulary';
import { Reading } from '../classes/reading';
import { Mcq } from '../classes/mcq';
import { Vocabularyetoj } from '../classes/vocabularyetoj';

@Injectable({
  providedIn: 'root'
})
export class ExercisesValueService {
  
  

  VocabularyValue = new BehaviorSubject<Vocabulary[]>(null!);
  VocabularyetojValue = new BehaviorSubject<Vocabularyetoj[]>(null!);
  VideoValue = new BehaviorSubject<string>(null!);
  ReadingValue = new BehaviorSubject<Reading[]>(null!);
  McqValue = new BehaviorSubject<Mcq[]>(null!);
  storage : Storage = localStorage;
  resultId = new BehaviorSubject<string>(null!);



  constructor() { 

  }

  loadVideoExercise(video:string){
    this.VideoValue.next(video);
    this.storage.setItem("video", video);
  }

  loadVocabularyExercise(VocabValue:Vocabulary[]){
    this.VocabularyValue.next(VocabValue);
    this.storage.setItem("vocabulary", JSON.stringify(VocabValue));
    }

  loadVocabularyetojExercise(VocabetojValue:Vocabularyetoj[]) {
    this.VocabularyetojValue.next(VocabetojValue);
    this.storage.setItem("vocabularyetoj", JSON.stringify(VocabetojValue));
    }

  loadReadingExercise(reading: Reading[]) {
    this.ReadingValue.next(reading);
    this.storage.setItem("reading", JSON.stringify(reading));
  }

  loadMcqExercise(mcq: Mcq[]) {
    this.McqValue.next(mcq);
    this.storage.setItem("mcq", JSON.stringify(mcq));
  }

}
