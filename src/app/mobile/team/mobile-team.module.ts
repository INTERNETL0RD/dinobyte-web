import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileTeamComponent } from './mobile-team.component';



@NgModule({
  declarations: [MobileTeamComponent],
  imports: [
    CommonModule
  ],
  exports: [MobileTeamComponent]
})
export class MobileTeamModule { }
