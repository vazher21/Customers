import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormAddressComponent } from './client-form-address.component';

describe('ClientFormAddressComponent', () => {
  let component: ClientFormAddressComponent;
  let fixture: ComponentFixture<ClientFormAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
