import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: [
    'product-list.component.css'
  ]
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 45;
  imageMargin: number = 2;
  showImage: boolean = true;
  listFilter: string = '';

  products: Array<Product>;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = `Product List: ${message}`;
  }
}
