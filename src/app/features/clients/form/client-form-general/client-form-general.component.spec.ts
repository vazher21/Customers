import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormGeneralComponent } from './client-form-general.component';

describe('ClientFormGeneralComponent', () => {
  let component: ClientFormGeneralComponent;
  let fixture: ComponentFixture<ClientFormGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFormGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
