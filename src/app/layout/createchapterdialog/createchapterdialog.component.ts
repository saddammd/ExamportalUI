import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { chapter } from 'src/app/classes/chapter';
import { Lesson } from 'src/app/classes/lesson';
import { LessonService } from 'src/app/services/lesson.service';


@Component({
  selector: 'app-createchapterdialog',
  templateUrl: './createchapterdialog.component.html',
  styleUrls: ['./createchapterdialog.component.css']
})
export class CreatechapterdialogComponent {

  constructor(private lessonService : LessonService,
              private router : Router){

  }

  @ViewChild('myModal') myModal!: ElementRef;
  chapter = new chapter(); 
  formData = {
    chapterName: ''
    // Add more properties for other form fields
  };
  

  onSubmit(form: any) {
    // Access form data using form.value and assign it to a variable
    const submittedData = { ...form.value };
    
    // You can now use 'submittedData' in your component as needed
    this.chapter.name = submittedData.chapterName;
    
    console.log("the chapter is" +this.chapter.name);

    //Call Service
    this.lessonService.postLesson(this.chapter).subscribe((data=>{
      console.log();
    })
    );
  
    
      

    //Clear the data after data is submitted
    this.formData.chapterName = ''
    window.location.reload();

  }

 
}
