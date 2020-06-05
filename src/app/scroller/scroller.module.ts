import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollerComponent } from './scroller.component';



@NgModule({
  declarations: [ScrollerComponent],
  imports: [
    CommonModule
  ],
  exports: [ScrollerComponent]
})

@Injectable()
export class ScrollerModule { }
