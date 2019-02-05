import { Injectable } from '@angular/core';
import { Race } from '../interfaces/race';
import { Poney } from '../interfaces/poney';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _races: Race[] = [
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

  private _ponies: Poney[] = [
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

  get ponies() {
    return this._ponies
  }

  get races() {
    return this._races
  }

  constructor() {}
}
