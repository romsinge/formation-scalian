import { DataService } from './services/data.service';
import { Component, ViewChildren } from '@angular/core';
import { Race } from './interfaces/race';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'SCALIAN';

  getDate(): Date {
    return new Date()
  }

  races: Race[] = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.races = this.dataService.races
  }
}
