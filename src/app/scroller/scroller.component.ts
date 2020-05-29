import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.sass']
})


export class ScrollerComponent implements OnInit {
  @Input() activeItem: number;
  constructor() {


  }
  ngOnInit() {

  }



  changeActiveItem(num: number) {
    this.activeItem = num;
    let element = document.querySelector("#about");
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
