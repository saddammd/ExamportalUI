import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/layout/admin/admin.component';
import { ChapterMgmtComponent } from 'src/app/layout/chapter-mgmt/chapter-mgmt.component';

const routes: Routes = [
  {path:'', component: AdminComponent,
  children:[
    {
      path:'chaptersmanagement', 
      loadChildren:()=>import('../chaptersmanagement/chaptersmanagement.module').then(m=>m.ChaptersmanagementModule)
    },
    {
      path:'chaptersmanagement/details', 
      loadChildren:()=>import('../details/details.module').then(m=>m.DetailsModule)
    },
    
    {
      path:'videoTamilDetails', 
      loadChildren:()=>import('../video-tamil-details/video-tamil-details.module').then(m=>m.VideoTamilDetailsModule)
    },
    {
      path:'videoHindiDetails', 
      loadChildren:()=>import('../video-hindi-details/video-hindi-details.module').then(m=>m.VideoHindiDetailsModule)
    },
    {
      path:'chaptersmanagement/details/chapterdetails/:id/mcqDetails', 
      loadChildren:()=>import('../mcq-details/mcq-details.module').then(m=>m.McqDetailsModule)
    },
    {
      path:'chaptersmanagement/details/chapterdetails/:id',
      loadChildren:()=>import('../chapterdetails/chapterdetails.module').then(m=>m.ChapterdetailsModule)
    },
    {
        path:'chaptersmanagement/details/chapterdetails/:id/readingdetails', 
        loadChildren:()=>import('../readingdetails/readingdetails.module').then(m=>m.ReadingdetailsModule)
    },
    {
      path:'chaptersmanagement/details/chapterdetails/:id/vocabularyjtoedetails', 
      loadChildren:()=>import('../vocabularyjtoedetails/vocabularyjtoedetails.module').then(m=>m.VocabularyjtoedetailsModule)
    },
    {
      path:'chaptersmanagement/details/chapterdetails/:id/vocabularyetojdetails', 
      loadChildren:()=>import('../vocabularyetojdetails/vocabularyetojdetails.module').then(m=>m.VocabularyetojdetailsModule)
    },
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
