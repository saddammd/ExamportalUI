import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vocabularyetoj } from 'src/app/classes/vocabularyetoj';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-vocabularyetoj',
  templateUrl: './vocabularyetoj.component.html',
  styleUrls: ['./vocabularyetoj.component.css']
})
export class VocabularyetojComponent {

  englishValue!: string;
  hiraganaValue!: string;
  RomajiValue!: string;
  vocabetojValue!: Vocabularyetoj[];
  totalitems : number = 0;
  i: number = 0;

  constructor(private exercise: ExercisesValueService,
              private router: Router){}

  ngOnInit(): void {
     this.loadVocabularyLesson();
     this.loadDefaultVocabularyLesson();
      }

  loadVocabularyLesson(){
    this.exercise.VocabularyetojValue.subscribe(data=>{
      this.vocabetojValue = data;
      this.RomajiValue = this.vocabetojValue[0].romaji_character;
      this.englishValue = this.vocabetojValue[0].english_character;
      this.hiraganaValue = this.vocabetojValue[0].hiragana_character;
      this.totalitems = this.vocabetojValue.length;
      
    }
    );
  }
  loadDefaultVocabularyLesson(){

    if(this.vocabetojValue === null){
     this.vocabetojValue = JSON.parse(this.exercise.storage.getItem('vocabulary')!);
     this.RomajiValue = this.vocabetojValue[0].romaji_character;
      this.englishValue = this.vocabetojValue[0].english_character;
      this.hiraganaValue = this.vocabetojValue[0].hiragana_character;
      this.totalitems = this.vocabetojValue.length;

    }
  }
  nextValue(){
    if(this.i<=this.vocabetojValue.length){
      this.i++;
   this.hiraganaValue = this.vocabetojValue[this.i].hiragana_character;
    this.englishValue = this.vocabetojValue[this.i].english_character;
    this.RomajiValue = this.vocabetojValue[this.i].romaji_character;
    }
  }

  prevValue(){
    if(this.i>0){
      this.i--;
    this.hiraganaValue = this.vocabetojValue[this.i].hiragana_character;
    this.englishValue = this.vocabetojValue[this.i].english_character;
    this.RomajiValue = this.vocabetojValue[this.i].romaji_character;
    }
  }

  rotate: string = 'rotateY( 0deg )';

  flip(){
    if(this.rotate === "rotateY( 0deg )"){
      this.rotate="rotateY( 180deg )"
    document.getElementById('contentid')!.style.transform=this.rotate;
    }
    else{
      this.rotate="rotateY( 0deg )"
      document.getElementById('contentid')!.style.transform=this.rotate;
    }
  }

  backtolesson(){
    this.router.navigate(['members','lessons','chapters']);
  }
}
