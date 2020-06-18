import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';
import { fade2 } from 'src/app/animations';

@Component({
  selector: 'app-mobile-team',
  templateUrl: './mobile-team.component.html',
  styleUrls: ['./mobile-team.component.sass'],
  animations: [fade2]
})
export class MobileTeamComponent implements OnInit {

  public visibleItemState = [true, false, false, false, false];

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
