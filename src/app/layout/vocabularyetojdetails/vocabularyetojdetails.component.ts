import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Addvocabularyetoj } from 'src/app/classes/addvocabularyetoj';
import { Lesson } from 'src/app/classes/lesson';
import { Vocabularyetoj } from 'src/app/classes/vocabularyetoj';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-vocabularyetojdetails',
  templateUrl: './vocabularyetojdetails.component.html',
  styleUrls: ['./vocabularyetojdetails.component.css']
})
export class VocabularyetojdetailsComponent {

  vocabularetojDetails!: Lesson
  id!:number
  chapterDetails!: Lesson
  lesson!: Lesson
  vocabularetoj: Vocabularyetoj[]=[];
  vocabularyetoj!: Vocabularyetoj;
  addVocabularyetoj: Addvocabularyetoj={
    id:  0,
    lessonId: 0,
    hiragana_character: '',
    english_character: '',
    kanji_character: '',
    romaji_character: ''
  };
  constructor(
    private exercises: ExercisesValueService,
    private router: Router,
    private lessonService: LessonService,
    private route: ActivatedRoute
  ){  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadVocabularyEtoJDetails();      
  }

  loadVocabularyEtoJDetails(){
    this.lessonService.getVocabularyEtoJByLessonId(this.id).subscribe(data=>{
      this.vocabularetoj = data;
      console.log(this.vocabularetoj[0].kanji_character);
    })
  }

  onSubmit(form: any) {
  
    const submittedData = { ...form.value };
    this.addVocabularyetoj = submittedData;
    this.addVocabularyetoj.lessonId = this.id;
    this.lessonService.postVocabularyEtoJ(this.addVocabularyetoj).subscribe((data=>{
      console.log();
      this.loadVocabularyEtoJDetails();
    })
    );
    console.log("the submittedform value" +this.addVocabularyetoj.hiragana_character);

    //Clear the data after data is submitted
    this.addVocabularyetoj.english_character = '',
    this.addVocabularyetoj.hiragana_character = '',
    this.addVocabularyetoj.kanji_character = '',
    this.addVocabularyetoj.romaji_character = ''
      }



 
  backtochapterdetails(){
    this.router.navigate(['members','admin','chaptersmanagement','details','chapterdetails',this.id]);
  }


}
