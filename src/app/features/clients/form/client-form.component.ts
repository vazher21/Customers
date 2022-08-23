import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IStep } from '../../../shared/standalone components/stepper/models/step.interface';
import { CREATED_CLIENT } from '../constants/clients-routes';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientFormGeneralService } from './client-form-general/client-form-general.service';
import { ClientFormAddressService } from './client-form-address/client-form-address.service';
import { ClientFormIdentityService } from './client-form-identity/client-form-identity.service';
import { BaseStepService } from '../../../shared/classes/stepper-form/base-step-service';
import { Subject } from 'rxjs';
import { IClient } from '../models/client.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { STEPS } from '../constants/steps';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent {
  steps = STEPS;
  currentStep = 1;
  shake$ = new Subject<boolean>();

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
    private clientFormIdentityService: ClientFormIdentityService,
    private matSnackBar: MatSnackBar
  ) {}

  onStepChange(step: IStep) {
    if (step.index < this.currentStep) {
      this.navigateToStep(step);
      return;
    }
    for (let i = 1; i < step.index; i++) {
      const service = this.indexToService.get(i) as BaseStepService<any>;
      if (!service.isValid()) {
        const step = this.steps.find((s) => s.index === i) as IStep;
        service.markAllAsTouched();
        this.navigateToStep(step, true);
        return;
      }
    }
    this.navigateToStep(step);
  }

  private shake() {
    this.shake$.next(true);
    setTimeout(() => this.shake$.next(false), 700);
  }

  public onNextStep() {
    const nextStep = this.steps.find((s) => s.index === this.currentStep + 1);
    this.onStepChange(nextStep as IStep);
  }

  private navigateToStep(step: IStep, shake = false) {
    this.router
      .navigate([`${step.routerLink}`], { relativeTo: this.route })
      .then((result) => {
        if (shake) {
          this.shake();
        }
        if (!result) {
          return;
        }
        this.currentStep = step.index;
      });
  }

  submit() {
    const service = this.indexToService.get(
      this.currentStep
    ) as BaseStepService<any>;
    if (!service.isValid()) {
      service.markAllAsTouched();
      this.shake();
      return;
    }
    const client: IClient = {
      addressInfo: this.clientAddressFormService.readForm(),
      generalInfo: this.clientGeneralFormService.readForm(),
      identityInfo: this.clientFormIdentityService.readForm(),
    };
    this.matSnackBar.open('Client successfully created!');
    this.router.navigate([`../${CREATED_CLIENT}`], {
      state: { client },
      relativeTo: this.route,
    });
  }
}
