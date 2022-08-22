import { FormControl } from '@angular/forms';
import { ClientGroupEnum } from './client-group.enum';
import { DocumentTypeEnum } from './document-type.enum';

export interface IClientForm {
  generalForm: IClientGeneralForm;
  addressForm: IClientAddressForm;
  identityForm: IClientIdentityForm;
}

export interface IClientGeneralForm {
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  middleName: FormControl<string | null>;
  dateOfBirth: FormControl<string | Date | null>;
  phoneNumber: FormControl<string | null>;
  gender?: FormControl<string | null>;
  clientGroup: FormControl<ClientGroupEnum[] | null>;
  coordinator?: FormControl<string | null>;
  sendSms?: FormControl<boolean | null>;
}

export interface IClientAddressForm {
  country: FormControl<string | null>;
  city: FormControl<string | null>;
  area: FormControl<string | null>;
  street: FormControl<string | null>;
  house: FormControl<string | null>;
}

export interface IClientIdentityForm {
  documentType: FormControl<DocumentTypeEnum | null>;
  series?: FormControl<string | null>;
  number: FormControl<string | null>;
  issuedBy: FormControl<string | null>;
  dateOfIssue: FormControl<string | Date | null>;
  file: FormControl<string | null>; // base64;
}
