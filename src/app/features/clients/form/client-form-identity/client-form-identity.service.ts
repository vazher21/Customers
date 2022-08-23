import { Injectable } from '@angular/core';
import { BaseStepService } from '../../../../shared/classes/stepper-form/base-step-service';
import { IClientIdentityInfo } from '../../models/client.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IClientIdentityForm } from '../../models/client-form.interface';

@Injectable()
export class ClientFormIdentityService extends BaseStepService<IClientIdentityInfo> {
  override form = new FormGroup<IClientIdentityForm>({
    documentType: new FormControl(null, Validators.required),
    number: new FormControl(null, Validators.required),
    dateOfIssue: new FormControl(null, Validators.required),
    file: new FormControl(null, Validators.required),
    issuedBy: new FormControl(null, Validators.required),
    series: new FormControl(null),
  });

  constructor() {
    super();
    this.file.valueChanges.subscribe((a) => console.log(a));
  }

  get file(): FormControl {
    return this.form.controls['file'] as FormControl;
  }
}
