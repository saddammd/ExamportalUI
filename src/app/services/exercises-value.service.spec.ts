import { TestBed } from '@angular/core/testing';

import { ExercisesValueService } from './exercises-value.service';

describe('ExercisesValueService', () => {
  let service: ExercisesValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisesValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
