import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vocabulary } from 'src/app/classes/vocabulary';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent {

  englishValue!: string;
  hiraganaValue!: string;
  RomajiValue!: string;
  vocabValue!: Vocabulary[];
  totalitems : number = 0;
  i: number = 0;

  constructor(private exercise: ExercisesValueService,
              private router: Router){}

  ngOnInit(): void {
     this.loadVocabularyLesson();
     this.loadDefaultVocabularyLesson();
      }

  loadVocabularyLesson(){
    this.exercise.VocabularyValue.subscribe(data=>{
      this.vocabValue = data;
      this.RomajiValue = this.vocabValue[0].romaji_character;
      this.englishValue = this.vocabValue[0].english_character;
      this.hiraganaValue = this.vocabValue[0].hiragana_character;
      this.totalitems = this.vocabValue.length;
    }
    );
  }
  loadDefaultVocabularyLesson(){

    if(this.vocabValue === null){
     this.vocabValue = JSON.parse(this.exercise.storage.getItem('vocabulary')!);
     this.RomajiValue = this.vocabValue[0].romaji_character;
      this.englishValue = this.vocabValue[0].english_character;
      this.hiraganaValue = this.vocabValue[0].hiragana_character;
      this.totalitems = this.vocabValue.length;

    }
  }
  nextValue(){
    if(this.i<=this.vocabValue.length){
      this.i++;
   this.hiraganaValue = this.vocabValue[this.i].hiragana_character;
    this.englishValue = this.vocabValue[this.i].english_character;
    this.RomajiValue = this.vocabValue[this.i].romaji_character;
    }
  }

  prevValue(){
    if(this.i>0){
      this.i--;
    this.hiraganaValue = this.vocabValue[this.i].hiragana_character;
    this.englishValue = this.vocabValue[this.i].english_character;
    this.RomajiValue = this.vocabValue[this.i].romaji_character;
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
