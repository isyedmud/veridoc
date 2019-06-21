import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctimePipe } from './doctime/doctime.pipe';

@NgModule({
  declarations: [
    DoctimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoctimePipe
  ]
})
export class PipesModule { }
