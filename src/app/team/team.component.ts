import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { fade, fade2 } from '../animations';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass'],
  animations: [fade, fade2]
})
export class TeamComponent implements OnInit {

  public visibleItemState = [true, false, false];
  currentSlide = 0;
  constructor(public globals: Globals) { }

  ngOnInit() {
  }

  goToSection(index: number) {
    this.globals.goToSection(index);
  }
}
