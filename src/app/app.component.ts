import { Component, OnInit, HostListener } from '@angular/core';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  private isExecuting = false;
  private counter = 0;

  constructor(private readonly globals: Globals) { }

  ngOnInit() {
  }

  title = 'dinobyte';
  
  @HostListener('mousewheel', ['$event']) // for window scroll events
  onScroll(event) {
    if (!this.isExecuting) {
      this.isExecuting = true;
      if (event.deltaY > 0 && this.counter <= 1 && this.counter >= 0) {
        //we do this to hide other components and trigger the hide animation
        this.globals.visibleComponents[this.counter] = false;
        this.counter++;
        this.globals.visibleComponents[this.counter] = true;
      } else if (event.deltaY < 0 && this.counter > 0 && this.counter <= 2) {
        this.globals.visibleComponents[this.counter] = false;
        this.counter--;
        this.globals.visibleComponents[this.counter] = true;
      }
      setTimeout(() => { this.isExecuting = false; }, 1000);
    }
  }
}
