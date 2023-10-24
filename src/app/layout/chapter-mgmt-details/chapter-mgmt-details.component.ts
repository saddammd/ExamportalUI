import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/classes/data';
import { Lesson } from 'src/app/classes/lesson';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-chapter-mgmt-details',
  templateUrl: './chapter-mgmt-details.component.html',
  styleUrls: ['./chapter-mgmt-details.component.css']
})
export class ChapterMgmtDetailsComponent {

  

  chapters!: Data
  chaptersDetails! : Lesson
  storage : Storage = localStorage;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService){

  }


  ngOnInit(): void {
    this.loadChapterDetails();
  }

  loadChapterDetails(){

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.lessonService.getLessonList().subscribe(data=>{
      this.chapters = data;
     this.chaptersDetails = this.chapters.data.content[id-1];
    })
  }

  navigateToTamilVideo(){

    const objectString = JSON.stringify(this.chaptersDetails);
    this.router.navigate(['members','admin','videoTamilDetails'], { queryParams: { data: objectString } });
  }

  navigateToHindiVideo(){
    const objectString = JSON.stringify(this.chaptersDetails);
    this.router.navigate(['members','admin','videoHindiDetails'], { queryParams: { data: objectString } });

  }

  backtochapterManagement(){
    this.router.navigate(['members','admin','chaptersmanagement']);
  }

  navigateToMcq(){
    const objectString = JSON.stringify(this.chaptersDetails);
    this.router.navigate(['members', 'admin', 'chaptersmanagement','details','chapterdetails',this.chaptersDetails.id,'mcqDetails']);
  //this.router.navigate(['mcqDetails'], { relativeTo: this.route.parent });
  }
  navigateToReading(){
    const objectString = JSON.stringify(this.chaptersDetails);
    this.router.navigate(['members','admin','chaptersmanagement','details','chapterdetails',this.chaptersDetails.id,'readingdetails']);
  }

  navigateToVocabularyEtoJ(){
    const objectString = JSON.stringify(this.chaptersDetails);
    this.router.navigate(['members','admin','chaptersmanagement','details','chapterdetails',this.chaptersDetails.id,'vocabularyetojdetails']);
  }

  navigateToVocabularyJtoE(){
    const objectString = JSON.stringify(this.chaptersDetails);
    this.router.navigate(['members','admin','chaptersmanagement','details','chapterdetails',this.chaptersDetails.id,'vocabularyjtoedetails']);

  }

  }

