import { Component, OnInit } from '@angular/core';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss']
})

export class AquariumComponent implements OnInit {
  fill: string = "red";

  constructor(
    private fishService: FishService,
  ) { }

  ngOnInit(): void {
    // get fish color
    this.fishService.getFish().subscribe(fish => this.fill = fish.color);
  }

}
