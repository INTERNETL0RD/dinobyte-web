import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-about',
  templateUrl: './about-technology.component.html',
  styleUrls: ['./about-technology.component.sass'],
  animations: [
    fade
  ]
})
export class AboutTechnologyComponent implements OnInit {

  constructor(public globals: Globals) {
  }

  ngOnInit() {
  }

  checkIfElementIsWithinViewport(id: string) {
    const element = document.getElementById(id);
    if ((element !== undefined) && (element != null)) {
      const elementOffsets = element.getBoundingClientRect();
      return elementOffsets.top * 3 <= window.outerHeight;
    } else {
      return false;
    }
  }

  goToSection(index: number){
    this.globals.goToSection(index);
  }

}
