import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadingComponent } from 'src/app/layout/reading/reading.component';

const routes: Routes = [
  {
    path: '', component:ReadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingRoutingModule { }
