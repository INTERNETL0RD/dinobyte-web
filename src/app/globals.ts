import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  visibleComponents = [true, false, false, false];

  goToSection(index: number){
    for (let i = 0; i < this.visibleComponents.length; i++) {
      this.visibleComponents[i] = false;
    }
    this.visibleComponents[index] = true;
  }
}
