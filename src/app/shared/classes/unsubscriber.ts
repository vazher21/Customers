import { Subject } from 'rxjs';
import { Directive } from '@angular/core';

@Directive({})
export class Unsubscriber {
  public unsubscriber$ = new Subject<void>();

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
