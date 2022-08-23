import { NgModule } from '@angular/core';
import { ClientFormComponent } from './form/client-form.component';
import { ClientFormGeneralComponent } from './form/client-form-general/client-form-general.component';
import { ClientFormAddressComponent } from './form/client-form-address/client-form-address.component';
import { ClientFormIdentityComponent } from './form/client-form-identity/client-form-identity.component';
import { SharedModule } from '../../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { StepperComponent } from '../../shared/standalone components/stepper/stepper.component';
import { CreatedClientComponent } from './created-client/created-client.component';

@NgModule({
  declarations: [
    ClientFormComponent,
    ClientFormGeneralComponent,
    ClientFormAddressComponent,
    ClientFormIdentityComponent,
    CreatedClientComponent,
  ],
  imports: [SharedModule, ClientsRoutingModule, StepperComponent],
})
export class ClientsModule {}
