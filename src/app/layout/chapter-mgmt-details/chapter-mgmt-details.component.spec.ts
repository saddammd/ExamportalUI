import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterMgmtDetailsComponent } from './chapter-mgmt-details.component';

describe('ChapterMgmtDetailsComponent', () => {
  let component: ChapterMgmtDetailsComponent;
  let fixture: ComponentFixture<ChapterMgmtDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapterMgmtDetailsComponent]
    });
    fixture = TestBed.createComponent(ChapterMgmtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
