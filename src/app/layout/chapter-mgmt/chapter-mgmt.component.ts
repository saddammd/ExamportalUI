import { Component } from '@angular/core';
import { chapter } from 'src/app/classes/chapter';
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
  editChapterName = new chapter();
 

  constructor(private lessonservice: LessonService,
    private exercises: ExercisesValueService,) { }

  ngOnInit(): void {
    this.loadChapters();
  }


  loadChapters() {

    return this.lessonservice.getLessonList().subscribe(data => {
      this.chaptersData = data;
      console.log("chapter name from api" + this.chaptersData.data.content[0].id);

    }

    );


  }

  loadDetails(item: Lesson) {
    this.exercises.ChapterDetails.next(item);

  }
  editChapter(lessonId: number) {

    this.editChapterName.name = this.chaptersData.data.content[lessonId -1].name;
    this.editChapterName.id = this.chaptersData.data.content[lessonId -1].id;
    console.log("Selected chapter is " + this.chaptersData.data.content[lessonId - 1].name);

  }

 

  onSubmit(form: any) {
    // Access form data using form.value and assign it to a variable
    const submittedData = { ...form.value };
    
    this.editChapterName.name = submittedData.chapterName;
    this.editChapterName.id = submittedData.chapterId;
    // You can now use 'submittedData' in your component as needed
    console.log('Submitted Data:', this.editChapterName.name);
   this.lessonservice.putLesson(this.editChapterName).subscribe(data=>{
     console.log(data);
     window.location.reload();
    });
    
  }
}
