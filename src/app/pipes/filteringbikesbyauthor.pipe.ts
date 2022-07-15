import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'FilteringBikeByAuthor'
})
export class FilteringBikeByAuthor implements PipeTransform {
  transform(Bikeslist: Content[], authorFilterBy?: string): Content[] {
    return Bikeslist.filter(authors => {
     
      if (authorFilterBy) {
      return authorFilterBy === authors.author;
      } 
      return !authors.type;
    });
  }
}