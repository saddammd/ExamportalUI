import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home/home.component';
import { MembersComponent } from './layout/members/members.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'members', component: MembersComponent, 
      children: [{
        path: 'lessons',
        loadChildren: () => import('./modules/lessons/lessons.module').then(m=>m.LessonsModule)
      }] },
      {
        path: '*.*', component:HomeComponent
      }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
