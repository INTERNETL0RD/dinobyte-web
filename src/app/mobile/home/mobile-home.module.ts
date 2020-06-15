import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeComponent } from './mobile-home.component';


@NgModule({
  declarations: [MobileHomeComponent],
  imports: [
    CommonModule
  ],
  exports: [MobileHomeComponent]
})
export class MobileHomeModule { }
