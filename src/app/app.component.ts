import { Component, OnInit, HostListener } from '@angular/core';
import { Globals } from './globals';
import { LayoutService } from './layout/layout.service';
import { CustomBreakpointNames } from './breakpoints/breakpoints.service';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(public globals: Globals, private readonly layoutService: LayoutService) {
  }
  private isExecuting = false;
  public isMobile = false;

  title = 'dinobyte';

  ngOnInit() {
    AOS.init();
    this.layoutService.subscribeToLayoutChanges().subscribe(observerResponse => {
      if (this.layoutService.isBreakpointActive(CustomBreakpointNames.small)) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  @HostListener('mousewheel', ['$event']) // for window scroll events
  onScroll(event) {
    if (!this.isExecuting) {
      this.isExecuting = true;
      const previousSelectedItem = this.globals.visibleComponents.indexOf(true);
      if (event.deltaY > 0 && previousSelectedItem < this.globals.visibleComponents.length - 1) {
        // we do this to hide the component and trigger the hide animation
        this.globals.visibleComponents[previousSelectedItem] = false;
        this.globals.visibleComponents[previousSelectedItem + 1] = true;
      } else if (event.deltaY < 0 && previousSelectedItem > 0) {
        this.globals.visibleComponents[previousSelectedItem] = false;
        this.globals.visibleComponents[previousSelectedItem - 1] = true;
      }
      setTimeout(() => { this.isExecuting = false; }, 1000);
    }
  }
}
