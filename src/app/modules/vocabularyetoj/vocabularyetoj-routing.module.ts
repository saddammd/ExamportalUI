import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyetojComponent } from 'src/app/layout/vocabularyetoj/vocabularyetoj.component';

const routes: Routes = [
  {
    path:'',
    component: VocabularyetojComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabularyetojRoutingModule { }
