import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ClientFormGeneralService } from '../form/client-form-general/client-form-general.service';
import {
  CLIENT_ADDRESS_ROUTE,
  CLIENT_IDENTITY_ROUTE,
} from '../routes/clients-routes';
import { ClientFormAddressService } from '../form/client-form-address/client-form-address.service';

@Injectable()
export class CanSubmitGuard implements CanActivateChild {
  constructor(
    private clientGeneralFormService: ClientFormGeneralService,
    private clientAddressFormService: ClientFormAddressService
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const step: string | undefined = childRoute.routeConfig?.path;
    switch (step) {
      case CLIENT_ADDRESS_ROUTE:
        return this.clientGeneralFormService.isValid();
      case CLIENT_IDENTITY_ROUTE:
        return this.clientAddressFormService.isValid();
      default:
        return true;
    }
  }
}
