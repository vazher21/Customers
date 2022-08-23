import { ClientGroupEnum } from './client-group.enum';
import { DocumentTypeEnum } from './document-type.enum';

export interface IClient {
  generalInfo: IClientGeneralInfo;
  addressInfo: IClientAddressInfo;
  identityInfo: IClientIdentityInfo;
}

export interface IClientGeneralInfo {
  name: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: string | Date;
  phoneNumber: string;
  gender?: string;
  clientGroup: ClientGroupEnum[];
  coordinator?: string;
  sendSms?: boolean;
}

export interface IClientAddressInfo {
  country: string;
  city: string;
  area?: string;
  street: string;
  house: string;
  // index?: idk
}

export interface IClientIdentityInfo {
  documentType: DocumentTypeEnum;
  series?: string;
  number: string;
  issuedBy: string;
  dateOfIssue: string | Date;
  file?: string; // base64;
}
