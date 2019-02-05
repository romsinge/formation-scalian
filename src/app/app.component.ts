import { Component, ViewChildren } from '@angular/core';
import { Poney } from './interfaces/poney';
import { Race } from './interfaces/race';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'SCALIAN';

  races: Race[] = [
    {
      "id": "0",
      "name": "Tokyo",
      "poneyIds": ["0", "1"]
    },
    {
      "id": "1",
      "name": "Madrid",
      "poneyIds": ["1", "2"]
    }
  ]
}
