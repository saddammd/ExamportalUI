import { Component } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {

  constructor(){
  
  }

  typesOfShoes: string[] = ['なんですか','なんですが', 'なんです', 'なんで'];

  selectedAnswer(){
    
  }
}
