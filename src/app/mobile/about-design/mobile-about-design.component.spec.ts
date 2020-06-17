import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAboutDesignComponent } from './mobile-about-design.component';

describe('MobileAboutDesignComponent', () => {
  let component: MobileAboutDesignComponent;
  let fixture: ComponentFixture<MobileAboutDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAboutDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAboutDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
