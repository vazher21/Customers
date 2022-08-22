import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

export abstract class BaseStepService<T> {
  public detectChanges$ = new Subject<void>(); // Mainly used after form.markAllAsTouched();
  public form: FormGroup<any>;

  public isValid() {
    return this.form.valid;
  }

  public markAllAsTouched() {
    this.form.markAllAsTouched();
    this.detectChanges$.next();
  }

  public abstract fillForm(data: T): void;
  public abstract readForm(): T;
}
