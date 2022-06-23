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
import { BlogComponent } from './components/blog/blog.component';
import { BannerComponent } from './components/banner/banner.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';
import { FooterComponent } from './components/footer/footer.component';

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
    BlogComponent,
    BannerComponent,
    BottomInfoComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, NavbarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
