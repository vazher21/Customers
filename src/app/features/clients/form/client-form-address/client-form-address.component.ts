import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { of, startWith, switchMap } from 'rxjs';
import { ClientFormAddressService } from './client-form-address.service';
import { enterLeaveAnimation } from '../../../../shared/animations/enter-leave.animation';
import { BaseStepComponent } from '../../../../shared/classes/stepper-form/base-step-component';

@Component({
  selector: 'app-client-form-address',
  templateUrl: './client-form-address.component.html',
  styleUrls: [
    './client-form-address.component.scss',
    '../../../../shared/styles/basic-form.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enterLeaveAnimation],
})
export class ClientFormAddressComponent extends BaseStepComponent {
  form = this.clientFormAddressService.form;
  private readonly countryToCity = new Map([
    ['Georgia', ['Tbilisi', 'Kutaisi', 'Rustavi']],
    ['Canada', ['Toronto', 'Montreal', 'Ottawa']],
    ['Ukraine', ['Kyiv', 'Mariupol', 'Kherson']],
  ]);

  countries$ = of([...this.countryToCity.keys()]);
  cities$ = this.clientFormAddressService.country.valueChanges.pipe(
    startWith(this.clientFormAddressService.country.value),
    switchMap((country) => of(this.countryToCity.get(country)))
  );

  constructor(
    private clientFormAddressService: ClientFormAddressService,
    private cdr: ChangeDetectorRef
  ) {
    super(clientFormAddressService, cdr);
  }
}
