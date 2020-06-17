import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-mobile-about-design',
  templateUrl: './mobile-about-design.component.html',
  styleUrls: ['./mobile-about-design.component.sass']
})
export class MobileAboutDesignComponent implements OnInit {

  constructor(private readonly globals: Globals) { }

  ngOnInit() {
  }

}
