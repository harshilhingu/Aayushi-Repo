import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { BikersService } from '../services/bikers.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  Bikeslist: Content[];
  authorSearchMessage = {
    message: '',
    found: false,
  };
  hikaru: Content = {
    id: 3,
    title: 'Sam',
    body: 'A Biker  who became a successful Actor instead',
    author: 'Harshil',
    type: 'GM',
    hashtags: ['supergm', 'indepthanalysis'],
  };
  types: string[] = ['', 'IM', 'FM', 'GM'];
  constructor(private BikerService: BikersService) {
    this.Bikeslist = [];
  }

  ngOnInit(): void {
    // getContent test
    this.BikerService.getContent().subscribe(
      (BikersArray) => (this.Bikeslist = BikersArray)
    );

    // getContentItem test - worked
    // this.BikerService.getContentItem(1).subscribe(BikerSingleItem => {
    //   console.log("Got the content item: ", BikerSingleItem);
    // });

    // addContentItem test - worked
    // this.chessChampionService.addContentItem(this.hikaru).subscribe(chessChampionsArray => {
    //   console.log("Added Hikaru: ", chessChampionsArray);
    // });

    // updateContentItem test - worked
    // this.chessChampionService.updateContentItem(this.hikaru).subscribe(chessChampionsArray => {
    //   console.log("updated Hikaru: ", chessChampionsArray);
    // });

    // deleteContentItem test - worked
    // this.chessChampionService.deleteContentItem(1).subscribe(chessChampionsSingleItem => {
    //   console.log("Deleted the content item: ", chessChampionsSingleItem);
    // });
  }
  checkForAuthorInList(authorNameValue: string): void {
    if (
      this.Bikeslist.some(
        (bike) => bike.author.toLowerCase() === authorNameValue.toLowerCase()
      )
    ) {
      this.authorSearchMessage.message = 'Author Found';
      this.authorSearchMessage.found = true;
    } else {
      this.authorSearchMessage.message = 'Author Not Found';
      this.authorSearchMessage.found = false;
    }
  }
}
