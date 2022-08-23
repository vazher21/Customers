import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BaseStepComponent } from '../../../../shared/classes/stepper-form/base-step-component';
import { ClientFormGeneralService } from './client-form-general.service';
import { ClientGroupEnum } from '../../models/client-group.enum';
import { enumToArray } from '../../../../shared';
import { of } from 'rxjs';
import { enterLeaveAnimation } from '../../../../shared/animations/enter-leave.animation';

@Component({
  selector: 'app-client-form-general',
  templateUrl: './client-form-general.component.html',
  styleUrls: [
    './client-form-general.component.scss',
    '../../../../shared/styles/basic-form.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enterLeaveAnimation],
})
export class ClientFormGeneralComponent extends BaseStepComponent {
  public form = this.generalFormService.form;
  constructor(
    private generalFormService: ClientFormGeneralService,
    private cdr: ChangeDetectorRef
  ) {
    super(generalFormService, cdr);
  }

  public clientGroups = enumToArray(ClientGroupEnum);
  public coordinators = of(['Jhones', 'Colinwood', 'Ben', 'Alice']);
}
