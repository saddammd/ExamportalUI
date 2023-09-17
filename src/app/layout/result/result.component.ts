import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultCollectionResponse } from 'src/app/classes/resultCollectionResponse';
import { ResultResponse } from 'src/app/classes/resultResponse';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  result!: string;
  resultCollectionResponse!: ResultCollectionResponse;


  constructor(private exercises: ExercisesValueService,
              private routes: ActivatedRoute,
              private resultService: ResultService,
              private router: Router){

}


ngOnInit(): void {

    this.loadResult();
}

loadResult(){
  const urlId = this.routes.snapshot.paramMap.get('id');
  const id = +urlId!
  this.resultService.getResultList(id+1).subscribe(data=>{
    this.resultCollectionResponse = data;
    console.log(this.resultCollectionResponse.resultResponse.content[0].result[0].lessonId);
  })

}

backtolesson(){
  this.router.navigate(['members','lessons','chapters']);
}

}
