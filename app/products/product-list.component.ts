import { Component, OnInit } from '@angular/core';
import { Product } from './product';

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

  products: Array<Product> = [
    new Product(
               1,
              'Leaf Rake',
              'GDN-0011',
              'March 19, 2016',
              'Leaf rake with 48-inch wooden handle.',
              19.95,
              3,
              'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    ),
    new Product(
            2,
            'Garden Cart',
            'GDN-0023',
            'March 18, 2016',
            '15 gallon capacity rolling garden cart',
            32.99,
            4,
            'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        ),
        new Product(
            5,
            'Hammer',
            'TBX-0048',
            'May 21, 2016',
            'Curved claw steel hammer',
            8.9,
            5,
            'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
        )
  ]

  ngOnInit(): void {
    console.log('On init');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
