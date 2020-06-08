import { Component, OnInit, HostListener } from '@angular/core';
import { fade, move } from 'src/app/animations';
import { Globals } from 'src/app/globals';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [fade, move]
})
export class HomeComponent implements OnInit {

  constructor(public globals: Globals) {
  }

  ngOnInit() {
  }

  checkIfElementIsWithinViewport(id: string) {
    const element = document.getElementById(id);
    if ((element !== undefined) && (element != null)) {
      const elementOffsets = element.getBoundingClientRect();
      return (
        (elementOffsets.top <= 0) &&
        (elementOffsets.bottom <= window.innerHeight) &&
        (elementOffsets.right <= window.innerWidth)
      );
    } else {
      return false;
    }
  }
}
