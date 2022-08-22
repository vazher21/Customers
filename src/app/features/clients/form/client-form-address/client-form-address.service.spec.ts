import { TestBed } from '@angular/core/testing';

import { ClientFormAddressService } from './client-form-address.service';

describe('ClientFormAddressService', () => {
  let service: ClientFormAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientFormAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
