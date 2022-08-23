import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { enterLeaveAnimation } from '../../animations/enter-leave.animation';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss'],
  animations: [enterLeaveAnimation],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ValidationMessagesComponent,
      multi: true,
    },
  ],
})
export class ValidationMessagesComponent
  implements OnInit, ControlValueAccessor
{
  @ViewChild(FormControlDirective) fcDirective: FormControlDirective;
  @Input() formControlName: string;

  @Input() requiredMessage: string = 'this field is required';
  @Input() maxMsg = '';
  @Input() minMsg = '';
  @Input() maxLengthMsg = '';
  @Input() minLengthMsg = '';

  control: AbstractControl;
  constructor(private cc: ControlContainer) {}

  ngOnInit(): void {
    this.control =
      this.cc.control?.get(this.formControlName) ||
      (this.cc.control as AbstractControl);
  }

  writeValue(obj: any) {
    this.fcDirective?.valueAccessor?.writeValue(obj);
  }
  registerOnChange(fn: any) {
    this.fcDirective?.valueAccessor?.registerOnChange(fn);
  }
  registerOnTouched(fn: any) {
    this.fcDirective?.valueAccessor?.registerOnTouched(fn);
  }
}
