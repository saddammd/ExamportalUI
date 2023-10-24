import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechapterdialogComponent } from './createchapterdialog.component';

describe('CreatechapterdialogComponent', () => {
  let component: CreatechapterdialogComponent;
  let fixture: ComponentFixture<CreatechapterdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatechapterdialogComponent]
    });
    fixture = TestBed.createComponent(CreatechapterdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
