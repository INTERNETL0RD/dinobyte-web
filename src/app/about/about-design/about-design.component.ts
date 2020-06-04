import { Component, OnInit } from '@angular/core';
import { fade, move } from 'src/app/animations';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-about-design',
  templateUrl: './about-design.component.html',
  styleUrls: ['./about-design.component.sass'],
  animations: [
    fade, move
  ]
})
export class AboutDesignComponent implements OnInit {

  constructor(private readonly globals: Globals) { }

  ngOnInit() {
  }

  checkIfElementIsWithinViewport(id: string) {
    const element = document.getElementById(id);
    if ((element !== undefined) && (element != null)) {
      const elementOffsets = element.getBoundingClientRect();
      return (
        (elementOffsets.top >= 0) &&
        (elementOffsets.left >= 0) &&
        (elementOffsets.bottom <= window.innerHeight) &&
        (elementOffsets.right <= window.innerWidth)
      );
    } else {
      return false;
    }
  }
}
