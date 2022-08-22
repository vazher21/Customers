import { TestBed } from '@angular/core/testing';

import { ClientFormIdentityService } from './client-form-identity.service';

describe('ClientFormIdentityService', () => {
  let service: ClientFormIdentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientFormIdentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
