import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(value: Employee[], args: string): Employee[] {
      return value.filter((x)=>x.empFname.indexOf(args)!=-1);
    }
}

