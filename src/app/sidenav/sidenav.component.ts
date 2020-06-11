import { Component, OnInit } from '@angular/core';
import { move } from '../animations';
import { Globals } from '../globals';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
  animations: [move]
})
export class SidenavComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
