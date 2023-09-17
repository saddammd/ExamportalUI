import { Component } from '@angular/core';
import { Data } from 'src/app/classes/data';
import { Lesson } from 'src/app/classes/lesson';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-chapter-mgmt',
  templateUrl: './chapter-mgmt.component.html',
  styleUrls: ['./chapter-mgmt.component.css']
})
export class ChapterMgmtComponent {

  chaptersData!: Data;

  constructor(private lessonservice: LessonService,
    private exercises: ExercisesValueService,){}

  ngOnInit(): void {
    this.loadChapters();      
  }


  loadChapters(){

    return this.lessonservice.getLessonList().subscribe(data=>
      {
      this.chaptersData = data;
      console.log("chapter name from api" +this.chaptersData.data.content[0].id);
        
         }
          
    );
    

  }

  loadDetails(item : Lesson){
    this.exercises.ChapterDetails.next(item);

  }
}
