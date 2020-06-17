import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAboutDesignCarouselComponent } from './mobile-about-design-carousel.component';

describe('MobileAboutDesignCarouselComponent', () => {
  let component: MobileAboutDesignCarouselComponent;
  let fixture: ComponentFixture<MobileAboutDesignCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAboutDesignCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAboutDesignCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
