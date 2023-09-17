import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from 'src/app/classes/lesson';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-vocabularyjtoedetails',
  templateUrl: './vocabularyjtoedetails.component.html',
  styleUrls: ['./vocabularyjtoedetails.component.css']
})
export class VocabularyjtoedetailsComponent {

  vocabularyjtoeDetails!: Lesson
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
      this.vocabularyjtoeDetails = data;
      this.vocabularyjtoeDetails.vocabulary[0].romaji_character
    })
  }

  backtochapterdetails(){
    this.router.navigate(['members','admin','chapterdetails']);
  }


}
