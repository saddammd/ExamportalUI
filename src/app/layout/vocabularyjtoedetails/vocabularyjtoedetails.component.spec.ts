import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyjtoedetailsComponent } from './vocabularyjtoedetails.component';

describe('VocabularyjtoedetailsComponent', () => {
  let component: VocabularyjtoedetailsComponent;
  let fixture: ComponentFixture<VocabularyjtoedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocabularyjtoedetailsComponent]
    });
    fixture = TestBed.createComponent(VocabularyjtoedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
