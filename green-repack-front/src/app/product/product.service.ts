import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap, switchMap, mergeMap } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
import { ProductModel } from './ProductModel';
import { ProductShape } from './ProductShape';
import Param from './Param.json';
import { Product } from './Product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'https://projet-annuel-node.herokuapp.com';
  //uri = 'http://localhost:3000';

  private Product!: ProductModel;
  public products$: Observable<Product[]>;

  constructor(private readonly httpClient: HttpClient) { }

  public getListProduct(MarchandId: string): Observable<Product[]>{
    return this.httpClient.get(`${this.uri}/api/marchands/${MarchandId}/products`).pipe(
      map((data:Product[])=>{
        data.map((product:Product)=>{this.httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${product.libelle}`)
          .subscribe((search:any)=>{
            if(!search.products){
              var files=product.libelle.replace(/[ ,-]/g, '_');
              files=files.toUpperCase();
              return Object.assign(product,{img :Param.url+Param[files]+'.png'});

            }
            var searchProduct=search.products;
            if(Array.isArray(search.products)){
              searchProduct=search.products[0];
            }
          return Object.assign(product,{img : searchProduct.strProductThumb});
        })
      });
      console.log(data);

      return data;
      }),
     tap((product: Product[])=>{
       if(true){
        products.filter((product: Product) =>{
           return product;
        })
       }
     })/* */
      );

  }
  public find(idProduct){
    return this.httpClient.get<ProductModel>(`${this.uri}/api/products/`+idProduct);

  }
  public requestProduct(idProduct):Observable<ProductModel>{
    return this.httpClient.get<ProductModel>(`${this.uri}/api/products/`+idProduct);

  }

}

