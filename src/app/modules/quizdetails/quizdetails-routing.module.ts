import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizdetailsComponent } from 'src/app/layout/quizdetails/quizdetails.component';

const routes: Routes = [

  {
    path:'', component:QuizdetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizdetailsRoutingModule { }
