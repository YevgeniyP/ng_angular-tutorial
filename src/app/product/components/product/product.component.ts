import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../types';

@Component({
  selector: 'market-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'],
})
export class ProductComponent implements OnInit {
  productList!: ProductInterface[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getAll()
      .subscribe((value) => (this.productList = value.products));
  }
}
