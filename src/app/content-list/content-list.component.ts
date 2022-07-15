import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  Bikeslist: Content[];

  constructor() {
    this.Bikeslist = [
      {
        id: 0,
        title: 'CBR 10000RR',
        body: 'steel',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: 'Race bike',
        author: 'Tata motors',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },

      {
        id: 1,
        title: 'BMW',
        body: 'steel',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: 'Race bike',
        author: 'Tata motors',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
      {
        id: 3,
        title: 'splender',
        body: 'steel',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: 'old man',
        author: 'author',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
      {
        id: 3,
        title: 'royal enfeild',
        body: 'whole steel',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: 'big bikes',
        author: 'Tata motors',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
      {
        id: 4,
        title: 'hero honda',
        body: 'aluminum',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: 'low cost',
        author: 'Tata motors',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
    ];
  }

  ngOnInit(): void {}
}
