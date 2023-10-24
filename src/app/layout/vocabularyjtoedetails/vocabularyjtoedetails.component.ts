import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Addvocabularyjtoe } from 'src/app/classes/addvocabularyjtoe';
import { Lesson } from 'src/app/classes/lesson';
import { Vocabulary } from 'src/app/classes/vocabulary';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-vocabularyjtoedetails',
  templateUrl: './vocabularyjtoedetails.component.html',
  styleUrls: ['./vocabularyjtoedetails.component.css']
})
export class VocabularyjtoedetailsComponent {

  vocabularetojDetails!: Lesson;
  addVocabularyjtoe: Addvocabularyjtoe ={
    id:  0,
    lessonId: 0,
    hiragana_character: '',
    english_character: '',
    kanji_character: '',
    romaji_character: ''
  };
 
  id!:number;
  chapterDetails!: Lesson
  lesson!: Lesson
  vocabularjtoe: Vocabulary[]=[]
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private lessonService: LessonService
  ){}


  ngOnInit(): void {
    
    this.id = +this.route.snapshot.paramMap.get('id')!;   
    this.loadChaptersDetails2();   
  }

  loadChaptersDetails2(){
    this.lessonService.getVocabularyJtoEByLessonId(this.id).subscribe(data=>{
      this.vocabularjtoe = data;
    });
  }
  
  onSubmit(form: any) {
  
    const submittedData = { ...form.value };
    this.addVocabularyjtoe = submittedData;
    this.addVocabularyjtoe.lessonId = this.id;
    this.lessonService.postVocabularyJtoE(this.addVocabularyjtoe).subscribe((data=>{
      console.log();
      this.loadChaptersDetails2();

    })
    );

    //Clear the data after data is submitted
    this.addVocabularyjtoe.english_character = '',
    this.addVocabularyjtoe.hiragana_character = '',
    this.addVocabularyjtoe.kanji_character = '',
    this.addVocabularyjtoe.romaji_character = ''
      }

  backtochapterdetails(){
    this.router.navigate(['members','admin','chaptersmanagement','details','chapterdetails',this.id]);
  }


}
