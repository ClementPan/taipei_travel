import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotItemComponent } from './spot-item/spot-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    LoaderComponent,
    SpotItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent,
    SpotItemComponent
  ]
})
export class SharedModule { }
