import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs';
import { Lesson } from 'src/app/classes/lesson';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-video-hindidetails',
  templateUrl: './video-hindidetails.component.html',
  styleUrls: ['./video-hindidetails.component.css']
})
export class VideoHindidetailsComponent {

  formData = {
    tamilUrl:''
    // Add more properties for other form fields
  }

  lesson!: Lesson
  
  videoUrl: string = "";
  constructor(
    private exercises: ExercisesValueService,
    private router: Router,
    private lessonService: LessonService,
    private route: ActivatedRoute
  ){
    

  }

  ngOnInit(): void {
   this.loadVideoDetails();   
  }

  loadVideoDetails(){
    this.route.queryParams.subscribe((params) => {
      if (params[`data`]) {
        this.lesson = JSON.parse(params[`data`]);
        console.log("checking the structure", this.lesson.name);
        if (this.lesson.video[0] !== undefined || this.lesson.video[0] === isEmpty){
        this.videoUrl =  this.lesson.video[0].url2;
        }
        else{
          this.videoUrl = "Video URL Not Found"
        }
      }
      else{
        console.log("no data found");
      }
    });   
      }


  backtochapterdetails(){
    console.log("back buton value", +this.lesson)
    this.router.navigate(['members','admin','chaptersmanagement','details','chapterdetails',this.lesson.id]);
  }

  onSubmit(form: any) {
    // console.log("the lesson name is" +this.lesson.name);
     // Access form data using form.value and assign it to a variable
     const submittedData = { ...form.value };
     // You can now use 'submittedData' in your component as needed
    //  this.lesson.video[0].url = submittedData.tamilurl;
     
    // console.log("the video url is" +this.lesson.video[0].url);
     console.log("the submittedform value" +this.formData.tamilUrl);
 
     //Call Service
   //  this.lessonService.postVideo(this.lesson).subscribe((data=>{
  //     console.log();
  //   })
  //   );
   
     
       
 
     //Clear the data after data is submitted
    // this.formData.tamilUrl = ''
    // window.location.reload();
 
   }
 
}
