import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileAboutDesignCarouselComponent } from './mobile-about-design-carousel.component';
import { ScrollerModule } from 'src/app/scroller/scroller.module';



@NgModule({
  declarations: [MobileAboutDesignCarouselComponent],
  imports: [
    CommonModule,
    ScrollerModule
  ],
  exports: [MobileAboutDesignCarouselComponent]
})
export class MobileAboutDesignCarouselModule { }
