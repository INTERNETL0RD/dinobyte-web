import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'home-mobile',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.sass']
})
export class MobileHomeComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
