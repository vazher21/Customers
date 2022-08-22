import { Unsubscriber } from '../unsubscriber';
import { BaseStepService } from './base-step-service';
import { ChangeDetectorRef, Directive } from '@angular/core';
import { takeUntil } from 'rxjs';

@Directive({})
export class BaseStepComponent extends Unsubscriber {
  constructor(
    private baseStepService: BaseStepService<any>,
    private detectorRef: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    this.baseStepService.detectChanges$
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(() => this.detectorRef.detectChanges());
  }
}
