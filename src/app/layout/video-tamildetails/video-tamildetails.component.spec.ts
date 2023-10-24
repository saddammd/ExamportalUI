import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTamildetailsComponent } from './video-tamildetails.component';

describe('VideoTamildetailsComponent', () => {
  let component: VideoTamildetailsComponent;
  let fixture: ComponentFixture<VideoTamildetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTamildetailsComponent]
    });
    fixture = TestBed.createComponent(VideoTamildetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
