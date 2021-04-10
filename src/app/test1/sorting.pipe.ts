import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './products';

@Pipe({
  name: 'sorting'
})

export class SortingPipe implements PipeTransform {

  transform(value: Products[], args: string = 'title', orderDir: boolean = false): Products[] {
     console.log(args, orderDir);
     if (args === 'title') {
       if (orderDir === false) {
         return value.sort((a, b) => {
           const x = a.ProductTitle.toLowerCase();
           const y = b.ProductTitle.toLowerCase();
           if (x < y) { return -1; }
           if (x > y) { return 1; }
           return 0;
         });
       } else {
         return value.sort((a, b) => {
           const x = a.ProductTitle.toLowerCase();
           const y = b.ProductTitle.toLowerCase();
           if (x < y) { return -1; }
           if (x > y) { return 1; }
           return 0;
         }).reverse();
       }
     } else {
       if (orderDir === false) {
         return value.sort((a, b) => {
           return a.ProductPrice - b.ProductPrice;
         });
       } else {
         return value.sort((a, b) => {
           return b.ProductPrice - a.ProductPrice;
         });
       }
     }
  }
}

