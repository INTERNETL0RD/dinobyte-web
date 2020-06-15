import { Injectable } from '@angular/core';
import { BreakpointsService } from '../breakpoints/breakpoints.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private activeBreakpoints: string[] = [];

  constructor(private readonly breakpointObserver: BreakpointObserver,
    private readonly breakpointService: BreakpointsService) { }

    subscribeToLayoutChanges(): Observable<string[]> {
      return this.breakpointObserver
        .observe(this.breakpointService.getBreakpoints())
        .pipe(map((observeResponse) => this.parseBreakpointsResponse(observeResponse.breakpoints)));
    }

    parseBreakpointsResponse(breakpoints): string[] {
      this.activeBreakpoints = [];
    
      Object.keys(breakpoints).forEach((key) => {
        console.log(key)
        if (breakpoints[key]) {
          this.activeBreakpoints.push(this.breakpointService.getBreakpointName(key));
        }
      });
  
      return this.activeBreakpoints;
    }

    isBreakpointActive(breakpointName) {
      return this.activeBreakpoints.find(breakpoint => breakpoint === breakpointName);
    }
}
