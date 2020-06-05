import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { ScrollerModule } from '../scroller/scroller.module';

@NgModule({
  imports: [
    CommonModule,
    ScrollerModule
  ],
  declarations: [TeamComponent],
  exports: [TeamComponent]
})
export class TeamModule { }
