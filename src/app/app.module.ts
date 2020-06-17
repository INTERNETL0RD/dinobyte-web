import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AboutTechnologyModule } from './about/about-technology/about-technology.module';
import { AboutDesignModule } from './about/about-design/about-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Globals } from './globals';
import { TeamModule } from './team/team.module';
import { ScrollerModule } from './scroller/scroller.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { MobileHomeModule } from './mobile/home/mobile-home.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobileAboutTechnologyModule } from './mobile/about-technology/mobile-about-technology.module';
import { AboutTechnologyCarouselModule } from './mobile/about-technology-carousel/about-technology-carousel.module';
import { MobileAboutDesignModule } from './mobile/about-design/mobile-about-design.module';
import { MobileAboutDesignCarouselModule } from './mobile/about-design-arousel/mobile-about-design-carousel.module';
import { MobileSidenavModule } from './mobile/sidenav/mobile-sidenav.module';
import { MobileTeamModule } from './mobile/team/mobile-team.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutTechnologyModule,
    AboutDesignModule,
    BrowserAnimationsModule,
    TeamModule,
    ScrollerModule,
    SidenavModule,
    MobileHomeModule,
    FontAwesomeModule,
    MobileSidenavModule,
    MobileAboutTechnologyModule,
    AboutTechnologyCarouselModule,
    MobileAboutDesignModule,
    MobileAboutDesignCarouselModule,
    MobileTeamModule
  ],
  providers: [Globals, BreakpointObserver, MediaMatcher, Platform],
  bootstrap: [AppComponent]
})
export class AppModule { }
