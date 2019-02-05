import { Component, OnInit, ViewChildren } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';
import { Race } from 'src/app/interfaces/race';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sca-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  
  @ViewChildren('poneyChildren') poneyChildren
  race: Race
  ponies: Poney[]

  handleWin(poney: Poney) {
    console.log("WINNER : ", poney.name)
    this.poneyChildren.forEach(poney => {
      poney.stopRunning()
    })
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ponies = this.dataService.ponies
  }

}
