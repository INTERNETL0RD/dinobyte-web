import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';
import { move } from 'src/app/animations';

@Component({
  selector: 'app-mobile-sidenav',
  templateUrl: './mobile-sidenav.component.html',
  styleUrls: ['./mobile-sidenav.component.sass'],
  animations: [move]
})
export class MobileSidenavComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
