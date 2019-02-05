import { Component, OnInit, ViewChildren } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';
import { Race } from 'src/app/interfaces/race';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.stopRace()
  }

  stopRace(reset: boolean = false) {
    if(!!this.poneyChildren) {
      this.poneyChildren.forEach(poneyComponent => {
        poneyComponent.stopRunning()
  
        if (reset) {
          poneyComponent.poney.distance = 0
        }
      })
    }
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let id = this.route.snapshot.params.id

    this.race = this.dataService.getRaceById(id)
    
    if (!this.race) {
      this.router.navigateByUrl('')
    }
  }

  ngOnInit() {
    this.ponies = this.dataService.ponies    
  }

  ngOnDestroy(): void {
    this.stopRace(true)
  }

}
