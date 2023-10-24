import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Grammar } from 'src/app/classes/grammar';
import { Reading } from 'src/app/classes/reading';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html', 
  //template: `<div [innerHTML]="conversationHtml"></div>`,
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent {

  reading!: Reading[];
  Readingcontent:string = "";

  constructor(private exercise: ExercisesValueService,
              private router: Router){
   
  }

  ngOnInit() {
   
    this.loadReadingValue();
    this.loadDefaultRedingLesson();
  }

  loadReadingValue(){
    this.exercise.ReadingValue.subscribe(data=>{
      this.reading = data;
      
    });
    this.formatHTMLcontent();   

}

loadDefaultRedingLesson(){

  if(this.reading === null){
   this.reading = JSON.parse(this.exercise.storage.getItem('reading')!);
   this.formatHTMLcontent();
  }
}

formatHTMLcontent(){
 
   this.Readingcontent = this.reading[0].content;
}

backtolesson(){
  this.router.navigate(['members','lessons','chapters']);
}
}