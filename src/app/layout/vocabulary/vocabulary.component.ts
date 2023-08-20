import { Component } from '@angular/core';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent {

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
}
