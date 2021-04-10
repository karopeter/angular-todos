import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  cat: string = 'watch';
  proObj: Product = new Product(0, '', '', '', false);
  productArr: Product[] = [
    new Product(101, 'xyz', 'abgdehejl', 'abx', true),
    new Product(101, 'mon', 'adfas', 'abd', false)
  ];

  constructor() { }

  onCatChange(): void {
    this.cat = 'T-shirts';
  }
  onMyEvent(val: any): void {
    this.productArr = this.productArr.filter((x) => x.proTitle.indexOf(val) !== -1);
  }

  onProductAdd(): void {
    this.productArr.push(this.proObj);
  }

  onProductDelete(item: Product): void {
     this.productArr.splice(this.productArr.indexOf(item), 1);
  }

  ngOnInit(): void {
  }

}
