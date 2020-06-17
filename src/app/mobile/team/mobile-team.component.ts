import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-mobile-team',
  templateUrl: './mobile-team.component.html',
  styleUrls: ['./mobile-team.component.sass']
})
export class MobileTeamComponent implements OnInit {

  constructor(private readonly globals: Globals) { }

  ngOnInit() {
  }

}
