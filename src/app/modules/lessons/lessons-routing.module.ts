import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from 'src/app/layout/lessons/lessons/lessons.component';

const routes: Routes = [
  {path:'', component: LessonsComponent,
  children:[
    {
      path:'vocabulary', 
      loadChildren:()=>import('../vocabulary/vocabulary.module').then(m=>m.VocabularyModule)
    },
    {
      path:'video', 
      loadChildren:()=>import('../video/video.module').then(m=>m.VideoModule)
    },
    {
      path:'reading', 
      loadChildren:()=>import('../reading/reading.module').then(m=>m.ReadingModule)
    },
    {
      path:'choose', 
      loadChildren:()=>import('../choose/choose.module').then(m=>m.ChooseModule)
    },
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
