import { Component, OnInit, ViewChildren, Input } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';
import { Race } from 'src/app/interfaces/race';

@Component({
  selector: 'sca-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

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
    },
    {
      "id": "2",
      "name": "Isabelle",
      "img": "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif",
      "distance": 0
    }
  ]
  
  @ViewChildren('poneyChildren') poneyChildren
  @Input() race: Race

  handleWin(poney: Poney) {
    console.log("WINNER : ", poney.name)
    this.poneyChildren.forEach(poney => {
      poney.stopRunning()
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
