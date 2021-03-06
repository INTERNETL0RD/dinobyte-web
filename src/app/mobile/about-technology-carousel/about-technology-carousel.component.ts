import { Component, OnInit } from '@angular/core';
import { fade2 } from 'src/app/animations';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-about-technology-carousel',
  templateUrl: './about-technology-carousel.component.html',
  styleUrls: ['./about-technology-carousel.component.sass'],
  animations: [fade2]
})
export class AboutTechnologyCarouselComponent implements OnInit {

  public visibleItemState = [true, false, false];

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
