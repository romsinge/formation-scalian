import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './modules/material/material.module';
import { DistancePipe } from './pipes/distance.pipe';
import { RaceComponent } from './components/race/race.component';
import { IsRacingPipe } from './pipes/is-racing.pipe';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    DistancePipe,
    RaceComponent,
    IsRacingPipe,
    HomeComponent,
    RaceCreateComponent,
    PoneyCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
