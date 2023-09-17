import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyjtoedetailsComponent } from 'src/app/layout/vocabularyjtoedetails/vocabularyjtoedetails.component';

const routes: Routes = [

  {
    path:'', component:VocabularyjtoedetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabularyjtoedetailsRoutingModule { }
