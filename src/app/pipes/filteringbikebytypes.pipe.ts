import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'FilterdBike'
})
export class FilterdBike implements PipeTransform {
  transform(Bikeslist: Content[], typeToFilterBy?: string): Content[] {
    return Bikeslist.filter(bikes => {
     
      if (typeToFilterBy) {
      return typeToFilterBy === bikes.type;
      } 
      return !bikes.type;
    });
  }
}