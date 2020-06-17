import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';
import { fade } from '../animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [fade]
})
export class NavbarComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

  goToSection(index: number) {

    this.globals.goToSection(index);
  }

}
