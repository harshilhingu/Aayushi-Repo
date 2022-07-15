import { Component } from '@angular/core';
import { Content } from './models/content';
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H_Hingu_Bike';
  myList: List;

  constructor() {
    let contentitem: Content;
    this.myList = new List();

    contentitem = {
      id: 0,
      title: 'CBR 10000RR',
      body: "steel",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "Race bike",
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 1,
      title: 'BMW',
      body: "steel",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "Race bike",

    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 2,
      title: 'Duggatti',
      body: "steel and alumminium",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "play",
 
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 3,
      title: 'splender',
      body: "steel",
      imageLink: "https://wallpaperaccess.com/cbr-bike",
      type: "old man",

    };
    this.myList.addContent(contentitem);

  }
}