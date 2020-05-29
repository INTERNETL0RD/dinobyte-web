import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AboutTechnologyModule } from './about/about-technology/about-technology.module';
import { AboutDesignModule } from './about/about-design/about-design.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutTechnologyModule,
    AboutDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
