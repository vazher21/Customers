import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ClientFormGeneralService } from '../form/client-form-general/client-form-general.service';
import {
  CLIENT_ADDRESS_ROUTE,
  CLIENT_IDENTITY_ROUTE,
} from '../constants/clients-routes';
import { ClientFormAddressService } from '../form/client-form-address/client-form-address.service';

@Injectable()
export class CanSubmitGuard implements CanActivateChild {
  constructor(
    private clientGeneralFormService: ClientFormGeneralService,
    private clientAddressFormService: ClientFormAddressService,
    private router: Router
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
    let result: boolean;
    switch (step) {
      case CLIENT_ADDRESS_ROUTE:
        result = this.clientGeneralFormService.isValid();
        break;
      case CLIENT_IDENTITY_ROUTE:
        result = this.clientAddressFormService.isValid();
        break;
      default:
        result = true;
    }
    if (!result) {
      alert('You must fill the previous steps first.');
      this.router.navigate([`../`]);
    }
    return result;
  }
}
