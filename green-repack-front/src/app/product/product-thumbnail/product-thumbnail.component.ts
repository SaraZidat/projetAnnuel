import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product.entity';

@Component({
  selector: 'fbapp-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss'],

})
export class ProductThumbnailComponent {
  @Input() public product: Product;


}
