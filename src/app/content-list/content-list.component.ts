import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  Bikeslist: Content[];
  authorSearchMessage = {
    message: "",
    found: false
  };
  constructor() {
    this.Bikeslist = [
      {
        id: 0,
        title: 'CBR 10000RR',
        body: 'steel',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: 'Race bike',
        author: 'tata motors',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },

      {
        id: 1,
        title: 'BMW',
        body: 'steel',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: 'Race bike',
        author: 'tata motors',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
      {
        id: 3,
        title: 'Splender',
        body: 'steel',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: "Heavy model",
        author: 'tesla',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
      {
        id: 3,
        title: 'Royal Enfeild',
        body: 'whole steel',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: "Heavy model",
        author: 'tata motors',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
      {
        id: 4,
        title: 'Hero Honda',
        body: 'aluminum',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        author: 'tata motors',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
      {
        id: 5,
        title: 'Hayabuza',
        body: 'aluminum',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        type: "",
        author: 'tesla',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
      {
        id: 6,
        title: 'Trigger',
        body: 'aluminum',
        imageLink: 'https://wallpaperaccess.com/cbr-bike',
        // type:
        author: 'tesla',
        hashtags: ["BMW", "Trigger", "Hayabuza"],
      },
    
    ];
  }

  ngOnInit(): void {}
  checkForAuthorInList(authorNameValue: string): void {
    if (this.Bikeslist.some(bike => bike.author.toLowerCase() === authorNameValue.toLowerCase())) {
      this.authorSearchMessage.message = "Author Found";
      this.authorSearchMessage.found = true;
    }
    else {
      this.authorSearchMessage.message = "Author Not Found";
      this.authorSearchMessage.found = false;
    }}
}
