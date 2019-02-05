import { Poney } from './../../interfaces/poney';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sca-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input() poney: Poney
  intervalId
  @Output() win: EventEmitter<Poney> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.run()
  }

  run() {
    this.intervalId = setInterval(() => {
      this.poney.distance += Math.floor(Math.random() * 10) + 2

      if (this.poney.distance >= 90) {
        this.poney.distance = 90
        this.win.emit(this.poney)
      }
    }, 1000)
  }

  stopRunning() {
    clearInterval(this.intervalId)
  }

  getDistancePercentage() {
    return `${this.poney.distance}%`
  }
}
