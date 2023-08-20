import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabularyComponent } from 'src/app/layout/vocabulary/vocabulary.component';

const routes: Routes = [
  {
    path:'', component: VocabularyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabularyRoutingModule { }
