import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoHindidetailsComponent } from 'src/app/layout/video-hindidetails/video-hindidetails.component';

const routes: Routes = [
  {
    path:'', component: VideoHindidetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoHindiDetailsRoutingModule { }
