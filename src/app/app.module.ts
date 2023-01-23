import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AquariumModule, BoxTableModule } from './shared/shared-index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AquariumModule,
    BoxTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
