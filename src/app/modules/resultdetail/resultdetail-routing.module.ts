import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultdetailComponent } from 'src/app/layout/resultdetail/resultdetail.component';

const routes: Routes = [
  {path:'', component: ResultdetailComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultdetailRoutingModule { }
