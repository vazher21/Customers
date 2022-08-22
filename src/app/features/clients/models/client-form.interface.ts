import { FormControl } from '@angular/forms';
import { ClientGroupEnum } from './client-group.enum';
import { DocumentTypeEnum } from './document-type.enum';

export interface IClientForm {
  generalForm: IClientGeneralForm;
  addressForm: IClientAddressForm;
  identityForm: IClientIdentityForm;
}

export interface IClientGeneralForm {
  name: FormControl<string>;
  lastName: FormControl<string>;
  middleName: FormControl<string | null>;
  dateOfBirth: FormControl<string | Date>;
  phoneNumber: FormControl<string>;
  gender?: FormControl<string | null>;
  clientGroup: FormControl<ClientGroupEnum>;
  Coordinator?: FormControl<string | null>;
  sendSms?: FormControl<boolean | null>;
}

export interface IClientAddressForm {
  country: FormControl<string>;
  city: FormControl<string>;
  area: FormControl<string | null>;
  street: FormControl<string>;
  house: FormControl<string>;
}

export interface IClientIdentityForm {
  documentType: FormControl<DocumentTypeEnum>;
  series?: FormControl<string | null>;
  number: FormControl<string>;
  issuedBy: FormControl<string>;
  dateOfIssue: FormControl<string | Date>;
  file: FormControl<string>; // base64;
}
