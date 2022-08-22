import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './form/client-form.component';
import { ClientFormGeneralComponent } from './form/client-form-general/client-form-general.component';
import { ClientFormAddressComponent } from './form/client-form-address/client-form-address.component';
import { ClientFormIdentityComponent } from './form/client-form-identity/client-form-identity.component';
import { ClientFormGeneralService } from './form/client-form-general/client-form-general.service';
import { ClientFormAddressService } from './form/client-form-address/client-form-address.service';
import { ClientFormIdentityService } from './form/client-form-identity/client-form-identity.service';
import {
  CLIENT_ADDRESS_ROUTE,
  CLIENT_GENERAL_ROUTE,
  CLIENT_IDENTITY_ROUTE,
  MAIN_FORM_ROUTE,
} from './routes/clients-routes';
import { CanSubmitGuard } from './guards/can-submit.guard';

const routes: Routes = [
  { path: '', redirectTo: MAIN_FORM_ROUTE, pathMatch: 'full' },
  {
    path: MAIN_FORM_ROUTE,
    component: ClientFormComponent,
    canActivateChild: [CanSubmitGuard],
    providers: [
      ClientFormGeneralService,
      ClientFormAddressService,
      ClientFormIdentityService,
      CanSubmitGuard,
    ],
    children: [
      { path: '', redirectTo: CLIENT_GENERAL_ROUTE, pathMatch: 'full' },
      {
        path: CLIENT_GENERAL_ROUTE,
        component: ClientFormGeneralComponent,
      },
      {
        path: CLIENT_ADDRESS_ROUTE,
        component: ClientFormAddressComponent,
      },
      {
        path: CLIENT_IDENTITY_ROUTE,
        component: ClientFormIdentityComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
