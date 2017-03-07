import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import _  from 'lodash';
import { Product } from './product';

@Injectable()
export class ProductService {
  private _apiUrl = 'http://localhost:3001/products';

  constructor(private _http: Http) {}

  getProducts(): void {
    this._http.get(this._apiUrl)
      .map((response: Response) => {
          console.log(response);
      });
  }
  // getProducts(): Observable<Product[]> {
  //   return this._http.get(this._apiUrl)
  //     .map((response: Response) => <Product[]>response.json())
  // }
}
