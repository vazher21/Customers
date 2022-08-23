import { Injectable } from '@angular/core';
import { BaseStepService } from '../../../../shared/classes/stepper-form/base-step-service';
import { IClientGeneralInfo } from '../../models/client.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IClientGeneralForm } from '../../models/client-form.interface';
import { ClientGroupEnum } from '../../models/client-group.enum';

@Injectable()
export class ClientFormGeneralService extends BaseStepService<IClientGeneralInfo> {
  override form = new FormGroup<IClientGeneralForm>({
    name: new FormControl<string | null>('', Validators.required),
    lastName: new FormControl<string | null>('', Validators.required),
    middleName: new FormControl<string | null>(''),
    gender: new FormControl<string | null>(null),
    phoneNumber: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11), // Didn't want to use regex
    ]),
    dateOfBirth: new FormControl<string | Date | null>('', Validators.required),
    clientGroup: new FormControl<ClientGroupEnum[] | null>(
      null,
      Validators.required
    ),
    coordinator: new FormControl<string | null>(''),
    sendSms: new FormControl<boolean | null>(null),
  });
}
