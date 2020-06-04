import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  public visibleItemState = [false, false, false, false, false];
  currentSlide = 0;
  constructor(private readonly globals: Globals) { }

  ngOnInit() {
    this.visibleItemState[0] = true;
    this.visibleItemState[1] = true;
  }

  onPreviousClick() {
    let previous = this.currentSlide - 1;
    if (previous < 0) {
      previous = this.visibleItemState.length - 1;
    }
    this.carouselMovementLogic(previous);
  }

  onNextClick() {
    let next = this.currentSlide + 1;
    if (next === this.visibleItemState.length) {
      next = 0;
    }
    this.carouselMovementLogic(next);
  }

  carouselMovementLogic(cursor: number) {
    this.visibleItemState[cursor - 1] = false;
    if (cursor === this.visibleItemState.length - 1) {
      this.visibleItemState[0] = true;
    } else {
      this.visibleItemState[cursor + 1] = true;
    }
  }
}
