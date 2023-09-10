import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home/home.component';
import { MembersComponent } from './layout/members/members.component';
import { LessonsComponent } from './layout/lessons/lessons/lessons.component';
import { ChaptersComponent } from './layout/lessons/chapters/chapters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadingComponent } from './layout/reading/reading.component';
import { ChooseComponent } from './layout/choose/choose.component';
import { VideoComponent } from './layout/video/video.component'
import { VocabularyComponent } from './layout/vocabulary/vocabulary.component';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { VocabularyetojComponent } from './layout/vocabularyetoj/vocabularyetoj.component';
import { ResultComponent } from './layout/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    LessonsComponent,
    ChaptersComponent,
    ReadingComponent,
    ChooseComponent,
    VideoComponent,
    VocabularyComponent,
    VocabularyetojComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule,
    HttpClientModule,
    YouTubePlayerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
