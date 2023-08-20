import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from 'src/app/layout/choose/choose.component';

const routes: Routes = [

  {
    path:'', component:ChooseComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseRoutingModule { }
