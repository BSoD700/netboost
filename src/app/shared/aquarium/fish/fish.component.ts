import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FishComponent {
  @Input() fill: string = "red";
}
