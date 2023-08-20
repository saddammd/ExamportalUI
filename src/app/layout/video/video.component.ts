import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from 'src/app/classes/video';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  
  safeSrc!: SafeResourceUrl;
  videoobject!: string;

  ngOnInit(): void {
    this.getUrlValue();
    
    
  }

  constructor(private exercises: ExercisesValueService,
    private sanitizer: DomSanitizer) {}
  

getUrlValue(){
    this.exercises.VideoValue.subscribe(data=>
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(data)

    );
    
  
  }
}