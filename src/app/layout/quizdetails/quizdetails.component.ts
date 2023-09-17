import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from 'src/app/classes/lesson';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-quizdetails',
  templateUrl: './quizdetails.component.html',
  styleUrls: ['./quizdetails.component.css']
})


export class QuizdetailsComponent {

  chapterDetails!: Lesson
  constructor(
    private exercises: ExercisesValueService,
    private router: Router,
  ){

  }

  ngOnInit(): void {
    this.loadChaptersDetails();      
  }

  loadChaptersDetails(){
    return this.exercises.ChapterDetails.subscribe(data=>{
      this.chapterDetails = data;
      this.chapterDetails.mcq[0];
    })
  }

  backtochapterdetails(){
    this.router.navigate(['members','admin','chapterdetails']);
  }


}
