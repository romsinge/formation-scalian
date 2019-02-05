import { Component, ViewChildren } from '@angular/core';
import { Poney } from './interfaces/poney';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'SCALIAN';
  @ViewChildren('poneyChildren') poneyChildren

  ponies: Poney[] = [
    {
      "id": "0",
      "name": "Romain",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif",
      "distance": 0
    },
    {
      "id": "1",
      "name": "Michel",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif",
      "distance": 0
    }
  ]

  handleWin(poney: Poney) {
    console.log("WINNER : ", poney.name)
    this.poneyChildren.forEach(poney => {
      poney.stopRunning()
    })
  }
}
