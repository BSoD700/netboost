import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumComponent } from './aquarium.component';
import { FishModule } from './fish/fish.module';

@NgModule({
  declarations: [AquariumComponent],
  exports: [AquariumComponent],
  imports: [
    CommonModule,
    FishModule
  ]
})

export class AquariumModule { }
