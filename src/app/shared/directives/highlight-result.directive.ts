import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlightResult]',
})
export class HighlightResultDirective {
  @HostListener('mouseenter') onMouseEnter() {
    const nativeEl = this.ele.nativeElement as HTMLInputElement;
    nativeEl.style.color = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    const nativeEl = this.ele.nativeElement as HTMLInputElement;
    nativeEl.style.color = 'black';
  }
  constructor(private ele: ElementRef) {}
}
