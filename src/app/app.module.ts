import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { LuxuryComponent } from './components/luxury/luxury.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { WellnessComponent } from './components/wellness/wellness.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AdvantagesSecComponent } from './components/advantages-sec/advantages-sec.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { CirclesComponent } from './components/circles/circles.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LuxuryComponent,
    WellnessComponent,
    RestaurantComponent,
    AdvantagesSecComponent,
    RoomsComponent,
    CirclesComponent,
    TestimonialsComponent,
  ],
  imports: [BrowserModule, NavbarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
