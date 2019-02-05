import { Injectable } from '@angular/core';
import { Race } from '../interfaces/race';
import { Poney } from '../interfaces/poney';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _races: Race[] = []
  private _ponies: Poney[] = []
  API_URL: string = 'http://localhost:3000'

  get ponies(): Observable<Poney[]> {
    return this.http.get(`${this.API_URL}/ponies`)
    .pipe(map(ponies => <Poney[]>ponies))
  }

  get races(): Observable<Race[]> {
    return this.http.get(`${this.API_URL}/races`)
    .pipe(map(races => <Race[]>races))
  }

  getRaceById(id: string): Observable<Race> {
    return this.races.pipe(map(races => {
      return races.find(race => {
        return race.id === id
      })
    }))
  }

  constructor(private http: HttpClient) {}
}
