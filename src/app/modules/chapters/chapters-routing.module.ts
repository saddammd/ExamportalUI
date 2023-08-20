import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaptersComponent } from 'src/app/layout/lessons/chapters/chapters.component';

const routes: Routes = [
  {
    path: '', component:ChaptersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule { }
