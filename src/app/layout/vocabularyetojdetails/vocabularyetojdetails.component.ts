import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from 'src/app/classes/lesson';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-vocabularyetojdetails',
  templateUrl: './vocabularyetojdetails.component.html',
  styleUrls: ['./vocabularyetojdetails.component.css']
})
export class VocabularyetojdetailsComponent {

  vocabularetojDetails!: Lesson
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
      this.vocabularetojDetails = data;
    })
  }

  backtochapterdetails(){
    this.router.navigate(['members','admin','chapterdetails']);
  }


}
