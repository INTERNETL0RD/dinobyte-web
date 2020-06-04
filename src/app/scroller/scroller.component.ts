import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.sass']
})


export class ScrollerComponent implements OnInit {
  public selected = false;

  public scroll = 0;

  public sectionSize = 1;

  constructor(private readonly renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.listen('body', 'scroll', ($event) => {
      this.sectionSize = document.body.scrollHeight / 3;
      this.scroll = $event.path[0].scrollTop;
    });
  }

  scrollToTop() {
    document.body.scroll({top: 0});
  }

  scrollToTechnology() {
    document.querySelector('.technology').scrollTo();
  }

  scrollToDesign() {
    document.body.scroll({top: document.body.scrollHeight});
  }
}
