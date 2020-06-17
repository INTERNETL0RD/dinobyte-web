import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileSidenavComponent } from './mobile-sidenav.component';



@NgModule({
  declarations: [MobileSidenavComponent],
  imports: [
    CommonModule
  ],
  exports: [MobileSidenavComponent]
})
export class MobileSidenavModule { }
