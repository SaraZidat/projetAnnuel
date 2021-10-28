import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FbappPage } from 'src/app/shared/FbappPage';
import { ProductService } from '../product.service';
import { ProductModel } from '../ProductModel';
import { Product } from '../Product.entity';
import { DataLoaderService } from 'src/app/shared/data-loader.service';
//import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'fbapp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, FbappPage {
  public readonly pageTitle = 'Liste des Boissons';
  public products$: Observable<Product[]>;
  constructor(
    private readonly productService: ProductService,
    private readonly marchandsLoaderService: DataLoaderService<Product[]>,
    //private readonly userService: UserService,

  ) { }

  ngOnInit() {


    this.initProductsLoader();


  }

  private initProductsLoader(): void {

    this.products$ = this.marchandsLoaderService.stream$;
  }
  public onSelectProduct(product: Product): void {

  }
}
