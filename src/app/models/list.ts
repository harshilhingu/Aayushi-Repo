import { Content } from "./content";

export class List {
  private _items: Content[]; // private array starts with an _

  constructor() { // initially set the content array to be empty
    this._items = []; // initialize array
  }

  get items(): Content[] { // getter method that returns the array
    return this._items;
  }

  addContent(oneitem: Content): void { // add content method that adds one item to the end of the array
    this._items.push(oneitem);
  }

  getLength(): number { // A method that returns the length of the array
    return this._items.length;
  }

  printProperties(index: number): string {
    if (this._items.length <= index || index < 0) {
      return `<h2>Error, invalid index requested: ${index}</h2>`;
    }
    return `<div class="content-wrapper">
              <h1>${this._items[index].title}</h1>
              <p>${this._items[index].body}</p>
              <img src="${this._items[index].imageLink}">
              <div>${this._items[index].type}</div>
            </div>`;
  }
}