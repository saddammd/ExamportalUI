import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/classes/data';
import { LessonResponse } from 'src/app/classes/lesson-response';
import { Video } from 'src/app/classes/video';
import { Vocabulary } from 'src/app/classes/vocabulary';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent {

  lessonResponse!: LessonResponse<Data>;
  lessonData!: Data;

  constructor(private router: Router,
              private lessonservice: LessonService,
              private exercises: ExercisesValueService){
  
  }


  ngOnInit(): void {
      this.loadLesson();      
    }
    

  panelOpenState = false;
  showFiller = false;

  loadLesson(){
   return this.lessonservice.getLessonList().subscribe(data=>
      {
      this.lessonData = data;
      console.log("chapter name from api" +this.lessonData.data.content[0].video[0].url2.toString);
        
         }
          
    );
    
  }

  loadvideo(){
    this.router.navigate(['members','lessons','video']);
  }
  loadVideoValue(video:string){
    this.exercises.loadVideoExercise(video);
  }
  loadVocabularyValue(vocabs: Vocabulary[]){
    console.log("vocabulary value " +vocabs[0].kanji_character)
  }


  loadvocabular(){
    this.router.navigate(['members','lessons','vocabulary']);
  }
  loadreading(){
    this.router.navigate(['members','lessons','reading']);
  }
  loadchoose(){
    this.router.navigate(['members','lessons','choose']);
  }
}
