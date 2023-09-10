import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyetojComponent } from './vocabularyetoj.component';

describe('VocabularyetojComponent', () => {
  let component: VocabularyetojComponent;
  let fixture: ComponentFixture<VocabularyetojComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocabularyetojComponent]
    });
    fixture = TestBed.createComponent(VocabularyetojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
