import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxTableComponent } from './box-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 

@NgModule({
  declarations: [BoxTableComponent],
  exports: [BoxTableComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})

export class BoxTableModule { }
