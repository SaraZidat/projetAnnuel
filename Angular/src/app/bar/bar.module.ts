import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarAddComponent } from './bar-add/bar-add.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { BarRoutingModule } from './bar-routing.module';
import { BarListComponent } from './bar-list/bar-list.component';
import { BarThumbnailComponent } from './bar-thumbnail/bar-thumbnail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BarAddComponent, BarListComponent, BarThumbnailComponent],
  imports: [
    CommonModule,
    BarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BarModule { }
