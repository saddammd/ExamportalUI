import { Component } from '@angular/core';
import { Grammar } from 'src/app/classes/grammar';
import { Reading } from 'src/app/classes/reading';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent {

  reading!: Reading[];
  

  constructor(private exercise: ExercisesValueService){
    this.loadReadingValue();
    this.loadDefaultRedingLesson();
  }

  loadReadingValue(){
    this.exercise.ReadingValue.subscribe(data=>{
      this.reading = data;
    })

}

loadDefaultRedingLesson(){

  if(this.reading === null){
   this.reading = JSON.parse(this.exercise.storage.getItem('reading')!);
  }
}
}