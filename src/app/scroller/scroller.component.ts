import { Component, OnInit, Input } from '@angular/core';
import { Style } from '../entities/styles.entity';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.sass'],
})


export class ScrollerComponent implements OnInit {

  @Input() isColumn: boolean;
  @Input() flags: boolean[];
  public style: Style;

  constructor() {
  }

  ngOnInit() {
    if (this.isColumn) {
      this.style = {
        display: 'flex',
        flex_direction: 'column',
        position: 'fixed',
        right: '5%',
        top: '45%',
        z_index: 10000
      } as Style;
    }
    else {
      this.style = {
        display: 'flex',
        flex_direction: 'row',
        justify_content: 'center',
        right: '0',
        top: '0',
        z_index: 10000,
        position: 'inherit',
      } as Style;
    }
  }

  changeState(flagIndex: number) {
    for (let index = 0; index < this.flags.length; index++) {
      if (index === flagIndex && !this.flags[flagIndex]) {
        this.flags[flagIndex] = !this.flags[flagIndex];
      } else {
        this.flags[index] = false;
      }
    }
  }
}
