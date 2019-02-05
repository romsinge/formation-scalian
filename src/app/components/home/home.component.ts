import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Race } from 'src/app/interfaces/race';

@Component({
  selector: 'sca-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  races: Race[]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.races = this.dataService.races
  }

}
