import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[scaRainbow]'
})
export class RainbowDirective {

  elementService: ElementRef
  @Input() color: string

  constructor(elementRef: ElementRef) {
    this.elementService = elementRef
  }

  ngOnInit() {
    this.elementService.nativeElement.style.backgroundColor = this.color
  }
}
