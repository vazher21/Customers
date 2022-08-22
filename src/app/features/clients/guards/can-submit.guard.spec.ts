import { TestBed } from '@angular/core/testing';

import { CanSubmitGuard } from './can-submit.guard';

describe('CanSubmitGuard', () => {
  let guard: CanSubmitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanSubmitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
