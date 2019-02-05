import { Poney } from './../interfaces/poney';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[scaRainbow]'
})
export class RainbowDirective {

  elementService: ElementRef
  @Input('scaRainbow') color: string
  @Input() isColored: boolean
  @Input() poney: Poney

  constructor(elementRef: ElementRef) {
    this.elementService = elementRef
  }

  ngOnInit() {
    if (this.isColored) {
      this.elementService.nativeElement.style.backgroundColor = this.color
    }
  }

  @HostListener('dblclick') handleDblclick() {
    // Faire avancer le poney de 5 de distance
    this.poney.distance += 5
    // afficher son arc-en-ciel pendant 1s
    let rainbowImg = this.poney.img.replace('running', 'rainbow')
    this.poney.img = rainbowImg

    setTimeout(() => {
      let runningImg = this.poney.img.replace('rainbow', 'running')
      this.poney.img = runningImg
    }, 1000)
  }
}
