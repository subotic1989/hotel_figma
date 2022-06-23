import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { LuxuryComponent } from './components/luxury/luxury.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { WellnessComponent } from './components/wellness/wellness.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AdvantagesComponent } from './components/advantages2/advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LuxuryComponent,
    WellnessComponent,
    RestaurantComponent,
    AdvantagesComponent,
  ],
  imports: [BrowserModule, NavbarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
