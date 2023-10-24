import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqDetailsComponent } from './mcq-details.component';

describe('McqDetailsComponent', () => {
  let component: McqDetailsComponent;
  let fixture: ComponentFixture<McqDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McqDetailsComponent]
    });
    fixture = TestBed.createComponent(McqDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
