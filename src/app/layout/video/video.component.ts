import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EMPTY } from 'rxjs';
import { Video } from 'src/app/classes/video';
import { ExercisesValueService } from 'src/app/services/exercises-value.service';
import { LessonService } from 'src/app/services/lesson.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {


  safeSrc!: SafeResourceUrl;
  url!: string;


  ngOnInit(): void {
  }

  constructor(private exercises: ExercisesValueService,
    private sanitizer: DomSanitizer) {
    this.getUrlValue();
    if(this.exercises.VideoValue.value === null){
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.exercises.storage.getItem("video")!);
    }
  }


  getUrlValue() {
      this.exercises.VideoValue.subscribe(data => {
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(data);
      }
      
      );
    }
  }