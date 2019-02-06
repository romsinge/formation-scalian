import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Poney } from 'src/app/interfaces/poney';

@Component({
  selector: 'sca-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  name: string = "Jacques"
  poneyIds: string[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ponies$ = this.dataService.ponies
  }

  handleSubmit(event: any) {
    console.log('SUBMIT', event)
  }

}
