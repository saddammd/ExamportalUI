import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css'],
})


export class DialogboxComponent {

  score: number = 0;
  totalquesitons: number = 0;
  lessonId!: number;

  constructor(private resultService: ResultService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    this.openModal();
    this.lessonId = +this.route.snapshot.paramMap.get('id')!;
  }

  showModal = false;

  openModal() {
    this.resultService.openDialog.subscribe(data=>{
      this.showModal = data;
    }),
    this.resultService.score.subscribe(data=>{
      this.score = data;
    }),
    this.resultService.totalquestions.subscribe(data=>{
      this.totalquesitons = data;
    })
  }


  closeModal() {
    this.showModal = false;
    this.router.navigate(['members','lessons','result', this.lessonId]);
    this.resultService.openDialog.next(false);
  }
  
}
