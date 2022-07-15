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
      imageLink: "https://cdni.autocarindia.com/ExtraImages/20200730063629_2020-Honda-CBR1000RR-R-Fireblade-SP.jpg",
      type: "Race bike",
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 1,
      title: 'BMW',
      body: "steel",
      imageLink: "https://img.etimg.com/thumb/msid-75572296,width-640,resizemode-4,imgsize-507941/bmw-ninet.jpg",
      type: "Race bike",

    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 2,
      title: 'Duggatti',
      body: "steel and alumminium",
      imageLink: "https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor62863b5bef195.jpg",
      type: "play",
 
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 3,
      title: 'splender',
      body: "steel",
      imageLink: "https://images.hindustantimes.com/auto/img/2021/01/13/600x338/Royal_Enfiled_Classic_350_1606287446412_1606287452623_1610507147713.jpg",
      type: "old man",

    };
    this.myList.addContent(contentitem);

  }
}