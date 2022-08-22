import { Unsubscriber } from '../unsubscriber';
import { BaseStepService } from './base-step-service';
import { ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs';

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
