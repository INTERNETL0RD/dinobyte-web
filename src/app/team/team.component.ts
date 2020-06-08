import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { fade } from '../animations';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass'],
  animations: [fade]
})
export class TeamComponent implements OnInit {

  public visibleItemState = [true, false, false];
  currentSlide = 0;
  constructor(public globals: Globals) { }

  ngOnInit() {
    this.visibleItemState[0] = true;
  }

  goToSection(index: number){
    this.globals.goToSection(index);
  }
}
