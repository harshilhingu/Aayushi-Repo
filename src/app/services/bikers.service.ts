import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bikess, DEFAULTBIKES } from '../data/mock-bikes';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root',
})
export class BikersService {
  constructor() {}
  getContent(): Observable<Content[]> {
    return of(Bikess);
  }

  getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < Bikess.length; i++) {
      if (Bikess[i].id === id) {
        return of(Bikess[i]);
      }
    }
    return of(DEFAULTBIKES);
  }

  addContentItem(newContentItem: Content): Observable<Content[]> {
    if (!Bikess.some((biker) => biker.id === newContentItem.id)) {
      Bikess.push(newContentItem);
    }
    return of(Bikess);
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    Bikess.forEach((individualBikers, index) => {
      if (individualBikers.id === newContentItem.id) {
        console.log('Trying method 2');
        Bikess[index] = newContentItem;
        // return;
      }
    });

    return of(Bikess);
  }

  deleteContentItem(id: number): Observable<Content> {

    for (var i = 0; i < Bikess.length; i++) // iterate through each chess champion
    {
      if (Bikess[i].id === id) { // found the item
        // delete it from the array first
        Bikess.splice(i, 1);
        console.log("Deleted the item: ", Bikess);
        return of(Bikess[i]);
      }
    }
    return of(DEFAULTBIKES); // need to return something if the content isn't there
  }
}
