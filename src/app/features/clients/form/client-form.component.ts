import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IStep } from '../../../shared/standalone components/stepper/models/step.interface';
import {
  CLIENT_ADDRESS_ROUTE,
  CLIENT_GENERAL_ROUTE,
  CLIENT_IDENTITY_ROUTE,
} from '../routes/clients-routes';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientFormGeneralService } from './client-form-general/client-form-general.service';
import { ClientFormAddressService } from './client-form-address/client-form-address.service';
import { ClientFormIdentityService } from './client-form-identity/client-form-identity.service';
import { BaseStepService } from '../../../shared/classes/stepper-form/base-step-service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent {
  steps: IStep[] = [
    {
      index: 1,
      label: 'Client information',
      routerLink: CLIENT_GENERAL_ROUTE,
    },
    {
      index: 2,
      label: 'Address information',
      routerLink: CLIENT_ADDRESS_ROUTE,
    },
    {
      index: 3,
      label: 'Identity information',
      routerLink: CLIENT_IDENTITY_ROUTE,
    },
  ];
  currentStep = 1;

  // @ts-ignore
  private indexToService: Map<number, BaseStepService<any>> = new Map([
    [1, this.clientGeneralFormService],
    [2, this.clientAddressFormService],
    [3, this.clientFormIdentityService],
  ]);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientGeneralFormService: ClientFormGeneralService,
    private clientAddressFormService: ClientFormAddressService,
    private clientFormIdentityService: ClientFormIdentityService
  ) {}

  onStepChange(step: IStep) {
    if (step.index < this.currentStep) {
      this.navigateToStep(step);
      return;
    }
    for (let i = 1; i < step.index + 1; i++) {
      const service = this.indexToService.get(i) as BaseStepService<any>;
      if (!service.isValid()) {
        const step = this.steps.find((s) => s.index === i) as IStep;
        service.markAllAsTouched();
        this.navigateToStep(step);
        return;
      }
    }
    this.navigateToStep(step);
  }

  public onNextStep() {
    const nextStep = this.steps.find((s) => s.index === this.currentStep + 1);
    this.onStepChange(nextStep as IStep);
  }

  private navigateToStep(step: IStep) {
    this.router
      .navigate([`${step.routerLink}`], { relativeTo: this.route })
      .then(() => (this.currentStep = step.index));
  }
}
