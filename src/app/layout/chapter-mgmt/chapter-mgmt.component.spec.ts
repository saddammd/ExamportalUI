import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterMgmtComponent } from './chapter-mgmt.component';

describe('ChapterMgmtComponent', () => {
  let component: ChapterMgmtComponent;
  let fixture: ComponentFixture<ChapterMgmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapterMgmtComponent]
    });
    fixture = TestBed.createComponent(ChapterMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
