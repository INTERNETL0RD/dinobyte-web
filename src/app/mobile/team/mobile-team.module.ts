import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileTeamComponent } from './mobile-team.component';
import { ScrollerModule } from 'src/app/scroller/scroller.module';



@NgModule({
  declarations: [MobileTeamComponent],
  imports: [
    CommonModule,
    ScrollerModule
  ],
  exports: [MobileTeamComponent]
})
export class MobileTeamModule { }
