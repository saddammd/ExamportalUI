import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadingdetailsComponent } from 'src/app/layout/readingdetails/readingdetails.component';

const routes: Routes = [

  {
    path:'', component:ReadingdetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingdetailsRoutingModule { }
