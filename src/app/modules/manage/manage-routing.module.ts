import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from 'src/app/layout/manage/manage.component';

const routes: Routes = [
  {
    path:'', component:ManageComponent,
    children:[
      {
          path:'mcqDetails', 
          loadChildren:()=>import('../mcq-details/mcq-details.module').then(m=>m.McqDetailsModule)
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
