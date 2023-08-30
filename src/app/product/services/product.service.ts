import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseInterface } from '../types/product-response.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private baseURL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductResponseInterface> {
    return this.http.get<ProductResponseInterface>(this.baseURL);
  }
}
