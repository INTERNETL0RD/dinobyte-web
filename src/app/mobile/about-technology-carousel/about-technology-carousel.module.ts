import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutTechnologyCarouselComponent } from './about-technology-carousel.component';
import { ScrollerModule } from 'src/app/scroller/scroller.module';



@NgModule({
  declarations: [AboutTechnologyCarouselComponent],
  imports: [
    CommonModule,
    ScrollerModule
  ],
  exports: [AboutTechnologyCarouselComponent]
})
export class AboutTechnologyCarouselModule { }
