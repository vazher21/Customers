import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStep } from './models/step.interface';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  @Input() steps: IStep[] = [];
  @Input() currentStep: number = 0;

  @Output() stepChange = new EventEmitter<IStep>();

  onStepClick(step: IStep) {
    if (this.currentStep !== step.index) {
      this.stepChange.emit(step);
    }
  }
}
