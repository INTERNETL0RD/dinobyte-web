import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-mobile-about-technology',
  templateUrl: './mobile-about-technology.component.html',
  styleUrls: ['./mobile-about-technology.component.sass']
})
export class MobileAboutTechnologyComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
    AOS.init();
  }

}
