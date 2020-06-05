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
  constructor(private readonly globals: Globals) { }

  ngOnInit() {
    this.visibleItemState[0] = true;
  }
}
