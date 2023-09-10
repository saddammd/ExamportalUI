import { Component } from '@angular/core';
import { Choose } from 'src/app/classes/choose';
import { Mcq } from 'src/app/classes/mcq';
import { Result } from 'src/app/classes/result';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {


  question!: string;
  option1!: string;
  option2!: string;
  option3!: string;
  option4!: string;
  answer!: string;
  id!: number;
  mcq!: Mcq[];
  i = 0;
  totalitems = 0;
  storage : Storage = sessionStorage;
  questionNumber!: string;
  result!: Result[];

  constructor(private exercise: ExercisesValueService) {
    this.loadMcqQuestion();
    this.loadDefaultMcqLesson();

  }



  selectedAnswer(opt: any) {
    if (opt.checked) {
      if(this.result.find())
      this.result[this.id].submittedAnswer = opt;
      this.result[this.id].answer = this.answer;
      this.result[this.id].question = this.question;
      this.result[this.id].option1 = this.option1;
      this.result[this.id].option2 = this.option2;
      this.result[this.id].option3 = this.option3;
      this.result[this.id].option4 = this.option4;
      //set lesson id
      this.result[this.id].lessonId =

    }
    
    this.questionNumber = this.i.toString();
    this.storage.setItem(this.questionNumber, opt.value);
  }

  loadMcqQuestion() {
    this.exercise.McqValue.subscribe(data => {
      this.mcq = data;
      this.id = this.mcq[0].id;
      this.question = this.mcq[0].question;
      this.option1 = this.mcq[0].option1;
      this.option2 = this.mcq[0].option2;
      this.option3 = this.mcq[0].option3;
      this.option4 = this.mcq[0].option4;
      this.answer = this.mcq[0].answer;


      this.totalitems = this.mcq.length;
      this.storage.clear();
    })
  }

  loadDefaultMcqLesson() {

    if (this.mcq === null) {
      this.mcq = JSON.parse(this.exercise.storage.getItem('mcq')!);
      this.id = this.mcq[0].id;
      this.question = this.mcq[0].question;
      this.option1 = this.mcq[0].option1;
      this.option2 = this.mcq[0].option2;
      this.option3 = this.mcq[0].option3;
      this.option4 = this.mcq[0].option4;
      this.answer = this.mcq[0].answer;
      this.totalitems = this.mcq.length;
      this.storage.clear();

    }

  }


  nextValue(opt1:any, opt2:any, opt3:any, opt4:any) {
    if (this.i <= this.mcq.length) {
      
      this.i++;
      this.id = this.mcq[this.i].id;
      this.question = this.mcq[this.i].question;
      this.option1 = this.mcq[this.i].option1;
      this.option2 = this.mcq[this.i].option2;
      this.option3 = this.mcq[this.i].option3;
      this.option4 = this.mcq[this.i].option4;
      this.answer = this.mcq[this.i].answer;

          //to make all the option unselect at the click of next button
          opt1.checked = false;
          opt2.checked = false;
          opt3.checked = false;
          opt4.checked = false;
         

     if(this.storage.getItem(this.i.toString())!=null){
        const selectedvalue = this.storage.getItem(this.i.toString());
        if(selectedvalue === this.option1){
          opt1.checked = true;
        }
        else if(selectedvalue === this.option2){
          opt2.checked = true;
        }
  
        else if(selectedvalue === this.option3){
          opt3.checked = true;
        }
  
        else if(selectedvalue === this.option4){
          opt4.checked = true;
        }
  
      } 
      
    }
    
  }

  prevValue(opt1:any, opt2:any, opt3:any, opt4:any) {
    if (this.i > 0) {
      this.i--;
      this.question = this.mcq[this.i].question;
      this.option1 = this.mcq[this.i].option1;
      this.option2 = this.mcq[this.i].option2;
      this.option3 = this.mcq[this.i].option3;
      this.option4 = this.mcq[this.i].option4;

      if(this.storage.getItem(this.i.toString())!=null){
        const selectedvalue = this.storage.getItem(this.i.toString());

        if(selectedvalue === this.option1){
          opt1.checked = true;
        }
        else if(selectedvalue === this.option2){
          opt2.checked = true;
        }

        else if(selectedvalue === this.option3){
          opt3.checked = true;
        }

        else if(selectedvalue === this.option4){
          opt4.checked = true;
        }

      }


    }
  }

}
