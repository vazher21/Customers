import { Injectable } from '@angular/core';
import { BaseStepService } from '../../../../shared/classes/stepper-form/base-step-service';
import { IClientAddressInfo } from '../../models/client.interface';
import { IClientAddressForm } from '../../models/client-form.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class ClientFormAddressService extends BaseStepService<IClientAddressInfo> {
  override form = new FormGroup<IClientAddressForm>({
    country: new FormControl('', Validators.required),
    city: new FormControl<string>('', Validators.required),
    area: new FormControl<string | null>(''),
    house: new FormControl<string>('', Validators.required),
    street: new FormControl<string>('', Validators.required),
  });
}
