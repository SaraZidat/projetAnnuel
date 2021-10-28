import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';


@NgModule({
  declarations: [ProductListComponent, ProductThumbnailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [ ProductThumbnailComponent ]
})
export class ProductModule { }
