import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Marchand } from '../Marchand';
import { MarchandService } from '../marchand.service';
import { Product } from '../../product/Product.entity';
import { ProductService } from '../../product/product.service';


@Component({
  selector: 'fbapp-marchand-details',
  templateUrl: './marchand-details.component.html',
  styleUrls: ['./marchand-details.component.scss']
})
export class MarchandDetailsComponent implements OnInit {
  public marchand$!: Observable<Marchand>;

  public products$!: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private products:ProductService, private marchands:MarchandService) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.marchand$=this.marchands.findOne(id);
    this.products$=this.products.getListProduct(id);

  }

}
