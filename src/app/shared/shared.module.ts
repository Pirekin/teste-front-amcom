import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardDefaultComponent } from './card-default/card-default.component';

@NgModule({
  declarations: [
    CardDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardDefaultComponent
  ]
})
export class SharedModule { }
