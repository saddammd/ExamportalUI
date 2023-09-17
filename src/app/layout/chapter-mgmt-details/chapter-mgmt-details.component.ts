import { Component } from '@angular/core';
import { Lesson } from 'src/app/classes/lesson';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-chapter-mgmt-details',
  templateUrl: './chapter-mgmt-details.component.html',
  styleUrls: ['./chapter-mgmt-details.component.css']
})
export class ChapterMgmtDetailsComponent {


  chapterDetails!: Lesson
  constructor(){

  }


  ngOnInit(): void {
    
  }

 

}
