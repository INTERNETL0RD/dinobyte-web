import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';
import AOS from 'aos';
import { fade2 } from 'src/app/animations';

@Component({
  selector: 'app-mobile-about-design-carousel',
  templateUrl: './mobile-about-design-carousel.component.html',
  styleUrls: ['./mobile-about-design-carousel.component.sass'],
  animations: [fade2]
})
export class MobileAboutDesignCarouselComponent implements OnInit {

  public visibleItemState = [true, false, false];

  constructor(public globals: Globals) { }

  ngOnInit() {
    AOS.init();
  }

}
