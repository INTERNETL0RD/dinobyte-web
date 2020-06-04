import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AboutTechnologyModule } from './about/about-technology/about-technology.module';
import { AboutDesignModule } from './about/about-design/about-design.module';
import { ScrollerComponent } from './scroller/scroller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Globals } from './globals';
import { TeamModule } from './team/team.module';

@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutTechnologyModule,
    AboutDesignModule,
    BrowserAnimationsModule,
    TeamModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
