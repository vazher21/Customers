import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

export abstract class BaseStepService<T> {
  public detectChanges$ = new Subject<void>(); // used after form.markAllAsTouched();
  public form: FormGroup<any>;

  public isValid() {
    return this.form.valid;
  }

  public markAllAsTouched() {
    this.form.markAllAsTouched();
    this.detectChanges$.next();
  }

  public fillForm(data: T) {
    this.form.patchValue(data);
  }
  public readForm() {
    return this.form.value;
  }
}
