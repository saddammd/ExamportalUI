import { Component } from '@angular/core';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  result!: string;


  constructor(private exercises: ExercisesValueService){

}


ngOnInit(): void {

  this.exercises.resultId.subscribe(data=>{
    this.result = data})
}

}
