import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterMgmtDetailsComponent } from 'src/app/layout/chapter-mgmt-details/chapter-mgmt-details.component';

const routes: Routes = [
  {
    path: '', component:ChapterMgmtDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterdetailsRoutingModule { }
