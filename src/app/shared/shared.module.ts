import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotItemComponent } from './spot-item/spot-item.component';



@NgModule({
  declarations: [
    SpotItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpotItemComponent
  ]
})
export class SharedModule { }
