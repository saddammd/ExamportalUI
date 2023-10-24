import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqDetailsComponent } from 'src/app/layout/mcq-details/mcq-details.component';

const routes: Routes = [
  {
    path:'', component: McqDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McqDetailsRoutingModule { }
