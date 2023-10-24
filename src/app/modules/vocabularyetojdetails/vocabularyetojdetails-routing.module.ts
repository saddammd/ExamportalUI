import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyetojdetailsComponent } from 'src/app/layout/vocabularyetojdetails/vocabularyetojdetails.component';

const routes: Routes = [

  {
    path:'', component:VocabularyetojdetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabularyetojdetailsRoutingModule { }
