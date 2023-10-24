import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHindidetailsComponent } from './video-hindidetails.component';

describe('VideoHindidetailsComponent', () => {
  let component: VideoHindidetailsComponent;
  let fixture: ComponentFixture<VideoHindidetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoHindidetailsComponent]
    });
    fixture = TestBed.createComponent(VideoHindidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
