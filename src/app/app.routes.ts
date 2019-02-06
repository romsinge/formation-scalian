import { RaceCreateComponent } from './components/race-create/race-create.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router'
import { RaceComponent } from './components/race/race.component';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: 'race-create',
    component: RaceCreateComponent
  },
  {
    path: 'poney-create',
    component: PoneyCreateComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]