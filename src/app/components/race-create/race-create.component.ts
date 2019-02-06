import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Poney } from 'src/app/interfaces/poney';
import { Race } from 'src/app/interfaces/race';
import { Router } from '@angular/router';

@Component({
  selector: 'sca-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  name: string = ""
  poneyIds: string[] = []

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ponies$ = this.dataService.ponies
  }

  handleSubmit(event: any) {
    let race: Race = {
      name: this.name,
      poneyIds: this.poneyIds
    }

    this.dataService.createRace(race).subscribe(() => {
      this.router.navigateByUrl('')
    })
  }

}
