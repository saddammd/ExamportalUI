import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyetojdetailsComponent } from './vocabularyetojdetails.component';

describe('VocabularyetojdetailsComponent', () => {
  let component: VocabularyetojdetailsComponent;
  let fixture: ComponentFixture<VocabularyetojdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocabularyetojdetailsComponent]
    });
    fixture = TestBed.createComponent(VocabularyetojdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
