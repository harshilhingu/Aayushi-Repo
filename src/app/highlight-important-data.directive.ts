import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]',
})
export class HighlightImportantDataDirective {
  private isHighlighted: boolean = false;
  private initialColourOfTagText: string;

  @Input() colour: string = '';
  @Input() highlightType?: 'type' | 'title' | 'tag' | 'author';
  @HostBinding('style.backgroundColor') get textColour() {
    return this.isHighlighted ? this.colour : 'transparent';
  }
  constructor(private elm: ElementRef) {
    this.initialColourOfTagText = this.elm.nativeElement.style.color;
  }

  @HostListener('mouseover') onMouseOver() {
    if (this.highlightType === 'type' || this.highlightType === 'author') {
      this.elm.nativeElement.style.border = '4px solid #0000ff';
    }

    if (this.highlightType === 'tag' || this.highlightType === 'author') {
      this.elm.nativeElement.style.color = 'darkred';
    }
  }
  @HostListener('mouseout') onMouseOut() {
    if (this.highlightType === 'type' || this.highlightType === 'author') {
      this.elm.nativeElement.style.border = 'none';
    }

    if (this.highlightType === 'tag' || this.highlightType === 'author') {
      this.elm.nativeElement.style.color = this.initialColourOfTagText;
    }
  }

  // click event
  @HostListener('click') onClick() {
    if (this.highlightType === 'title' || this.highlightType === 'author') {
      this.isHighlighted = !this.isHighlighted;
    }
  }
}
