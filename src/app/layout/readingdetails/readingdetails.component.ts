import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from 'src/app/classes/lesson';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-readingdetails',
  templateUrl: './readingdetails.component.html',
  styleUrls: ['./readingdetails.component.css']
})
export class ReadingdetailsComponent {

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
    })
  }

  backtochapterdetails(){
    this.router.navigate(['members','admin','chapterdetails']);
  }

}
