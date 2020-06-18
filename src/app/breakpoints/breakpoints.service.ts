import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  breakpoints: object = {
    '(max-width: 480px)': CustomBreakpointNames.small
  };

  getBreakpoints(): string[] {
    return Object.keys(this.breakpoints);
  }

  getBreakpointName(breakpointValue): string {
    return this.breakpoints[breakpointValue];
  }

  constructor() { }
}

export const CustomBreakpointNames = {
  small: 'small',
};
