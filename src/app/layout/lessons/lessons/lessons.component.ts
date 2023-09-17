import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/classes/data';
import { LessonResponse } from 'src/app/classes/lesson-response';
import { Mcq } from 'src/app/classes/mcq';
import { Reading } from 'src/app/classes/reading';
import { Vocabulary } from 'src/app/classes/vocabulary';
import { Vocabularyetoj } from 'src/app/classes/vocabularyetoj';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent {

  lessonResponse!: LessonResponse<Data>;
  lessonData!: Data;
  disp: boolean = true;
  panelOpenState = false;
  showFiller = false;
  activeLink: boolean = false;
  
  constructor(private router: Router,
              private lessonservice: LessonService,
              private exercises: ExercisesValueService,
              private resultservice: ResultService,
              private routes: ActivatedRoute){
  
  }


  ngOnInit(): void {
      this.loadLesson();      
    }
    

  loadLesson(){
   return this.lessonservice.getLessonList().subscribe(data=>
      {
      this.lessonData = data;
      console.log("chapter name from api" +this.lessonData.data.content[0].id);
        
         }
          
    );
    
  }

  
  loadVideoValue(video:string){
   this.exercises.loadVideoExercise(video); 
  }

    
  loadVocabularyValue(vocabs: Vocabulary[]){
    this.exercises.loadVocabularyExercise(vocabs);
  }

  loadVocabularyetojValue(vocabs: Vocabularyetoj[]){
    this.exercises.loadVocabularyetojExercise(vocabs);
  }

  loadReadingValue(reading: Reading[]){
    this.exercises.loadReadingExercise(reading);
  }

  loadQuizValue(mcq: Mcq[], lessonId: number){
   
    this.exercises.loadMcqExercise(mcq, lessonId);
  }

}

/*loadvideo(){
    this.router.navigate(['members','lessons','video']);
  }

  loadvocabular(){
    this.router.navigate(['members','lessons','vocabulary']);
  }
  loadreading(){
    this.router.navigate(['members','lessons','reading']);
  }
  loadchoose(){
    this.router.navigate(['members','lessons','choose']);
  }*/
