import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyetojComponent } from 'src/app/layout/vocabularyetoj/vocabularyetoj.component';
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
export class VocabularyetojdetailsRoutingModule { }
