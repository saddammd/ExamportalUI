import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Addmcq } from 'src/app/classes/addmcq';
import { Lesson } from 'src/app/classes/lesson';
import { Mcq } from 'src/app/classes/mcq';
import { Reading } from 'src/app/classes/reading';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-mcq-details',
  templateUrl: './mcq-details.component.html',
  styleUrls: ['./mcq-details.component.css']
})
export class McqDetailsComponent {

  createmcq!: Addmcq
  lesson!: Lesson

  mcq: Mcq []=[];
  onemcq!: Mcq;
  id!: number;
  mcqQuestion = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private lessonService: LessonService
  ){  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadMcqDetails2();
   }
 
  loadMcqDetails2(){
        this.lessonService.getMcqByLessonId(this.id).subscribe((data) => {
          this.mcq = data as Mcq[];
        /*  if (Array.isArray(data)) {
          for (const item of data) {
            this.mcq.push(item);
          }
        } */
        });
      }
 
  backtochapterdetails(){
    console.log("back buton value", +this.id)
    this.router.navigate(['members','admin','chaptersmanagement','details','chapterdetails',this.id]);
  }

  onSubmit(form: any) {
  
    const submittedData = { ...form.value };
    this.createmcq = submittedData;
    this.createmcq.lesson_id = this.id;
    this.lessonService.postMcq(this.createmcq).subscribe((data=>{
      console.log("executed post");
     // this.router.navigate(['members','admin','chapterdetails',this.id,'mcqDetails']); 
  
     this.loadMcqDetails2();
     console.log("executed get");
   
  })
  );


  

    //Clear the data after data is submitted
    this.mcqQuestion.question = '',
    this.mcqQuestion.option1 = '',
    this.mcqQuestion.option2 = '',
    this.mcqQuestion.option3 = '',
    this.mcqQuestion.option4 = '',
    this.mcqQuestion.answer = ''
    
 
}
}
