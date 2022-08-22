import { Subject } from 'rxjs';

export class Unsubscriber {
  public unsubscriber$ = new Subject<void>();

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
