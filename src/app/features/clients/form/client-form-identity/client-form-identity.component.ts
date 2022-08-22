import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { BaseStepComponent } from '../../../../shared/classes/stepper-form/base-step-component';
import { ClientFormIdentityService } from './client-form-identity.service';

@Component({
  selector: 'app-client-form-identity',
  templateUrl: './client-form-identity.component.html',
  styleUrls: ['./client-form-identity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormIdentityComponent extends BaseStepComponent {
  public form = this.identityFormService.form;
  constructor(
    private identityFormService: ClientFormIdentityService,
    private cdr: ChangeDetectorRef
  ) {
    super(identityFormService, cdr);
  }
}
