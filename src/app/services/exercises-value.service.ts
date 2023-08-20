import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Video } from '../classes/video';

@Injectable({
  providedIn: 'root'
})
export class ExercisesValueService {

  LessonId: Subject<number> = new Subject<number>();
  VideoId: Subject<number> = new Subject<number>();
  McqId: Subject<number> = new Subject<number>();
  ReadingId: Subject<number> = new Subject<number>();
  VocabularyId: Subject<number> = new Subject<number>();
  VideoValue = new Subject<string>();


  constructor() { }

  loadVideoExercise(video:string){
    this.VideoValue.next(video);

  }
}
