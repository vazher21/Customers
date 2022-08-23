import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { BaseStepComponent } from '../../../../shared/classes/stepper-form/base-step-component';
import { ClientFormIdentityService } from './client-form-identity.service';
import { enumToArray } from '../../../../shared';
import { of, Subject } from 'rxjs';
import { DocumentTypeEnum } from '../../models/document-type.enum';
import { enterLeaveAnimation } from '../../../../shared/animations/enter-leave.animation';

@Component({
  selector: 'app-client-form-identity',
  templateUrl: './client-form-identity.component.html',
  styleUrls: [
    './client-form-identity.component.scss',
    '../../../../shared/styles/basic-form.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enterLeaveAnimation],
})
export class ClientFormIdentityComponent extends BaseStepComponent {
  showUploadedImage$ = new Subject<string>();
  public form = this.identityFormService.form;
  constructor(
    private identityFormService: ClientFormIdentityService,
    private cdr: ChangeDetectorRef
  ) {
    super(identityFormService, cdr);
  }

  documentTypes$ = of(enumToArray(DocumentTypeEnum));

  get file() {
    return this.identityFormService.file;
  }

  onUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file.setValue(reader.result);
      this.showUploadedImage$.next(this.file.value);
    };
  }
}
