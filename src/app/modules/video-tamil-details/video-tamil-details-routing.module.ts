import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoTamildetailsComponent } from 'src/app/layout/video-tamildetails/video-tamildetails.component';

const routes: Routes = [
  {
    path:'', component: VideoTamildetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoTamilDetailsRoutingModule { }
