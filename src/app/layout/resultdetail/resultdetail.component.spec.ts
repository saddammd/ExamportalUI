import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdetailComponent } from './resultdetail.component';

describe('ResultdetailComponent', () => {
  let component: ResultdetailComponent;
  let fixture: ComponentFixture<ResultdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultdetailComponent]
    });
    fixture = TestBed.createComponent(ResultdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
