import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-box-table',
  templateUrl: './box-table.component.html',
  styleUrls: ['./box-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoxTableComponent {

  // array of color, you can add more color
  colors: Array<string> = [
    'red',
    'green',
    'blue',
  ];

  constructor(
    private fishService: FishService,
  ) { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
  }

  changeColor(color: string) {
    this.fishService.setFish({color})
  }
}
