import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mcq } from 'src/app/classes/mcq';
import { Result } from 'src/app/classes/result';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { ResultService } from 'src/app/services/result.service';

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
  storage: Storage = sessionStorage;
  questionNumber!: string;
  result: Result[] = []
  tempResult!: Result;
  lessonId!: string;
  score = 0;


  constructor(private exercise: ExercisesValueService,
    private resultService: ResultService,
    private routes: ActivatedRoute,
    private router: Router) {
    this.loadMcqQuestion();
    this.loadDefaultMcqLesson();
    this.lessonId = this.routes.snapshot.paramMap.get('id')!;

  }



  selectedAnswer(opt: any) {
    if (opt.checked) {

      this.tempResult = new Result();
      this.tempResult.submittedAnswer = opt.value;
      this.tempResult.answer = this.answer;
      this.tempResult.question = this.question;
      this.tempResult.option1 = this.option1;
      this.tempResult.option2 = this.option2;
      this.tempResult.option3 = this.option3;
      this.tempResult.option4 = this.option4;
      this.tempResult.lessonId = this.lessonId + 1;
      this.tempResult.questionId = this.i;
      this.addOrUpdateElement(this.result, this.tempResult);
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
    });

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


  nextValue(opt1: any, opt2: any, opt3: any, opt4: any) {
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


      if (this.storage.getItem(this.i.toString()) != null) {
        const selectedvalue = this.storage.getItem(this.i.toString());
        if (selectedvalue === this.option1) {
          opt1.checked = true;
        }
        else if (selectedvalue === this.option2) {
          opt2.checked = true;
        }

        else if (selectedvalue === this.option3) {
          opt3.checked = true;
        }

        else if (selectedvalue === this.option4) {
          opt4.checked = true;
        }

      }

    }

  }

  prevValue(opt1: any, opt2: any, opt3: any, opt4: any) {
    if (this.i > 0) {
      this.i--;
      this.question = this.mcq[this.i].question;
      this.option1 = this.mcq[this.i].option1;
      this.option2 = this.mcq[this.i].option2;
      this.option3 = this.mcq[this.i].option3;
      this.option4 = this.mcq[this.i].option4;
      this.answer = this.mcq[this.i].answer;

      if (this.storage.getItem(this.i.toString()) != null) {
        const selectedvalue = this.storage.getItem(this.i.toString());

        if (selectedvalue === this.option1) {
          opt1.checked = true;
        }
        else if (selectedvalue === this.option2) {
          opt2.checked = true;
        }

        else if (selectedvalue === this.option3) {
          opt3.checked = true;
        }

        else if (selectedvalue === this.option4) {
          opt4.checked = true;
        }

      }


    }
  }

  addOrUpdateElement(result: Result[], tempResult: Result) {
    // Check if the element is already present in the array
    const index = result.findIndex((obj) => obj.questionId === tempResult.questionId);


    if (index !== -1) {
      // If the element is found, remove the first occurrence
      result.splice(index, 1);
    }

    // Add the latest element to the array
    result.push(tempResult);

  }

  calculateTotal(result: Result[]) {
    // Iterate through the array of objects
    for (const obj of result) {
      // Compare "SubmittedAnswer" with "Answer"
      if (obj.submittedAnswer === obj.answer) {
        // If they are equal, increment the score
        this.resultService.score.next(this.score++);
        this.resultService.totalquestions.next(this.result.length);
      }
    }
  }

  backtolesson(){
    this.router.navigate(['members','lessons','chapters']);
  }

  submitAnswer() {

    this.resultService.postResultList(this.result).subscribe(
      (response) => {
        console.log(response);

      },

      (error) => {
        console.log(error);
      },


    );
    this.calculateTotal(this.result);
    this.resultService.openDialog.next(true);    
 
  }

}
