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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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
    SidenavModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
