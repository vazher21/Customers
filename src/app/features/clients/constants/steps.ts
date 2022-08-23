import { IStep } from '../../../shared/standalone components/stepper/models/step.interface';
import {
  CLIENT_ADDRESS_ROUTE,
  CLIENT_GENERAL_ROUTE,
  CLIENT_IDENTITY_ROUTE,
} from './clients-routes';

export const STEPS: IStep[] = [
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
