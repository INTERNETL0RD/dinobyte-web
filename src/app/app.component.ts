import { Component, OnInit, HostListener } from '@angular/core';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  private isExecuting = false;

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

  title = 'dinobyte';

  @HostListener('mousewheel', ['$event']) // for window scroll events
  onScroll(event) {
    if (!this.isExecuting) {
      this.isExecuting = true;
      const selectedView = this.globals.visibleComponents.indexOf(true);
      if (event.deltaY > 0 && selectedView !== this.globals.visibleComponents.length - 1) {
        this.globals.visibleComponents[selectedView] = false;
        this.globals.visibleComponents[selectedView + 1] = true;
      } else if (event.deltaY < 0 && selectedView !== 0) {
        this.globals.visibleComponents[selectedView] = false;
        this.globals.visibleComponents[selectedView - 1] = true;
      }
      setTimeout(() => { this.isExecuting = false; }, 1000);
    }
  }
}
