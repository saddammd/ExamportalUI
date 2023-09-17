import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterMgmtComponent } from 'src/app/layout/chapter-mgmt/chapter-mgmt.component';

const routes: Routes = [
  {
    path: '', component:ChapterMgmtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersmanagementRoutingModule { }
