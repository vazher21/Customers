import { TestBed } from '@angular/core/testing';

import { ClientFormGeneralService } from './client-form-general.service';

describe('ClientFormGeneralService', () => {
  let service: ClientFormGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientFormGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
