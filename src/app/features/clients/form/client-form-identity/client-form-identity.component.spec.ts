import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormIdentityComponent } from './client-form-identity.component';

describe('ClientFormIdentityComponent', () => {
  let component: ClientFormIdentityComponent;
  let fixture: ComponentFixture<ClientFormIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormIdentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFormIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
