import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTechnologyCarouselComponent } from './about-technology-carousel.component';

describe('AboutTechnologyCarouselComponent', () => {
  let component: AboutTechnologyCarouselComponent;
  let fixture: ComponentFixture<AboutTechnologyCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTechnologyCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTechnologyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
