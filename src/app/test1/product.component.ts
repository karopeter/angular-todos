import { Component, OnInit } from '@angular/core';
import { Products } from './products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  canAddProduct: boolean = false;
  flag: string = 'title';
  orderDir: boolean = false;
  color1: string = '';
  color2: string = '';
  color3: string = '';
  color4: string = '';
  ColorList: string[] = [];

  ProductList: Products[] = [
    new Products(101, 'Watch', 5000, 'Fastrack', new Date(2021, 4, 7), 'Brown, Black', true),
    new Products(102, 'Jeans', 7000, 'Wrangler', new Date(2021, 4, 7), 'Bluem Black', true),
    new Products(103, 'T-Shirt', 2000, 'Bewakoof', new Date(2021, 4, 7), 'White, Brown', true),
    new Products(104, 'Shirt', 3000, 'Bewakoof', new Date(2021, 4, 7), 'Blue', true),
    new Products(105, 'Shoes', 9000, 'Puma', new Date(2021, 4, 7), 'White', true),
    new Products(106, 'Wallet', 1000, 'Charm', new Date(2021, 4, 7), 'Black, Brown', true),
    new Products(107, 'Belt', 50000, 'Charm', new Date(2021, 4, 7), 'Black', true),
    new Products(106, 'Socks', 500, 'Puma', new Date(2021, 4, 7), 'White', false)
  ];

  setSortColumnAndOrder(columnName: string): void {
    this.flag = columnName;
    this.orderDir = !this.orderDir;
  }

  CanAddNewProduct(): void {
    this.canAddProduct = !this.canAddProduct;
  }

  setColor(state: any, value: any): void {
     if (state === true) {
       this.ColorList.push(value);
     } else {
       this.ColorList.splice(this.ColorList.indexOf(value), 1);
     }
  }

  AddProduct(
    productId: string, 
    productTitle: string, 
    productMfg: string, 
    productMfgDate: string, 
    productPrice: string, 
    productAvailable: boolean, 
    productNotAvailable: boolean
    ): void {
       let isAvailable: boolean = false;
       let productColor: string = '';

       productColor = this.ColorList.join(', ');

       if (productNotAvailable === true) {
         isAvailable = true;
       }
       if (productAvailable === true) {
         isAvailable = true;
       }
       let newProduct: Products;
       newProduct = new Products(parseInt(productId), productTitle, parseInt(productPrice), productMfg, new Date(productMfgDate), productColor, isAvailable);
         this.ProductList = this.ProductList.concat(newProduct);
    }

    RemoveProduct(product: Products): void {
      if (confirm('Are you sure you want to Delete?')) {
        this.ProductList.splice(this.ProductList.indexOf(product), 1);
        this.ProductList = this.ProductList.concat();
      }
    }

    UpdateProduct(product: Products): void {
     product.ProductAvailable = !product.ProductAvailable;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
