import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultResponse } from 'src/app/classes/resultResponse';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-resultdetail',
  templateUrl: './resultdetail.component.html',
  styleUrls: ['./resultdetail.component.css']
})
export class ResultdetailComponent {

  resultResponse!: ResultResponse;
  score: number = 0;
  id: number = 0;
  resultId: number = 0;

  constructor(private routes: ActivatedRoute,
    private resultService: ResultService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.loadResultDetail();
  }

  loadResultDetail() {
    const urlId = this.routes.snapshot.paramMap.get('id')!;
    this.id = +urlId!;
    this.resultService.getResultDetailList(this.id).subscribe((data) => {
      this.resultResponse = data;
      console.log(this.resultResponse.resultResponse.content[0].lessonId);
      this.calculateScore();
    });
  }

  calculateScore() {
    for (const i of this.resultResponse.resultResponse.content) {
      if (i.submittedAnswer === i.answer) {
        this.score++;
      }
     
    }


  }

  backtolesson(){
    this.resultId = +this.resultResponse.resultResponse.content[0].lessonId
    this.router.navigate(['members','lessons','result', this.resultId-1]);
  }
}

