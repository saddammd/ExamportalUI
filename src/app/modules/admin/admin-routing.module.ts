import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/layout/admin/admin.component';
import { ChapterMgmtComponent } from 'src/app/layout/chapter-mgmt/chapter-mgmt.component';

const routes: Routes = [
  {path:'', component: AdminComponent,
  children:[
    {
      path:'chapterdetails', 
      loadChildren:()=>import('../chapterdetails/chapterdetails.module').then(m=>m.ChapterdetailsModule)
    },

    {
      path:'chaptersmanagement', 
      loadChildren:()=>import('../chaptersmanagement/chaptersmanagement.module').then(m=>m.ChaptersmanagementModule)
    },
    {
      path:'quizdetails', 
      loadChildren:()=>import('../quizdetails/quizdetails.module').then(m=>m.QuizdetailsModule)
    },
    {
      path:'readingdetails', 
      loadChildren:()=>import('../readingdetails/readingdetails.module').then(m=>m.ReadingdetailsModule)
    },
    {
      path:'vocabularyetojdetails', 
      loadChildren:()=>import('../vocabularyetojdetails/vocabularyetojdetails.module').then(m=>m.VocabularyetojdetailsModule)
    },
    {
      path:'vocabularyjtoedetails', 
      loadChildren:()=>import('../vocabularyjtoedetails/vocabularyjtoedetails.module').then(m=>m.VocabularyjtoedetailsModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
