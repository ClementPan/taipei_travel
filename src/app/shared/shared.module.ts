import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotItemComponent } from './spot-item/spot-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    LoaderComponent,
    SpotItemComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent,
    DialogComponent,
    SpotItemComponent
  ]
})
export class SharedModule { }
