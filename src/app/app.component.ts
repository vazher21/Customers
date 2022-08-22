import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IStep } from './shared/standalone components/stepper/models/step.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'users';
}
