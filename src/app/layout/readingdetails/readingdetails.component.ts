import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Addreading } from 'src/app/classes/addreading';
import { Lesson } from 'src/app/classes/lesson';
import { Reading } from 'src/app/classes/reading';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-readingdetails',
  templateUrl: './readingdetails.component.html',
  styleUrls: ['./readingdetails.component.css']
})
export class ReadingdetailsComponent {

  chapterDetails!: Lesson;
  lesson!: Lesson;
  reading1!: Reading;
  addReading!: Addreading;
  reading: Reading = {
    id:  0,
    lessonId: 0,
    subheading: "",
    heading: "",
    imageUrl: "",
    content: "",
  };

  id!: number;
  constructor(
    private exercises: ExercisesValueService,
    private router: Router,
    private lessonService: LessonService,
    private route: ActivatedRoute
  ){  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadChaptersDetails2();      
  }

  loadChaptersDetails2(){
    this.lessonService.getReadingByLessonId(this.id).subscribe((data)=>{
       this.reading1 = data;
      }
    );

  }
  

  backtochapterdetails(){
    this.router.navigate(['members','admin','chaptersmanagement','details','chapterdetails',this.id]);
  }


  onSubmit(form: any) {
  
    const submittedData = { ...form.value };
    this.addReading = submittedData;
    this.addReading.lessonId = this.id;
    this.lessonService.postReading(this.addReading).subscribe((data=>{
      console.log();
      this.loadChaptersDetails2();
    })
    );
    console.log("the submittedform value" +this.addReading.content);

    //Clear the data after data is submitted
    this.addReading.heading = '',
    this.addReading.subheading = '',
    this.addReading.imageUrl = '',
    this.addReading.content = ''
 }

}
