import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishComponent } from './fish.component';

@NgModule({
  declarations: [FishComponent],
  exports: [FishComponent],
  imports: [
    CommonModule, 
  ]
})

export class FishModule { }
