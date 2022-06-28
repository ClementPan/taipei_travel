import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotItemComponent } from './spot-item/spot-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpotItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SpotItemComponent
  ]
})
export class SharedModule { }
