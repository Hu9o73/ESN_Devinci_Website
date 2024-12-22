import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarouselCardComponent } from './home-carousel-card.component';

describe('HomeCarouselCardComponent', () => {
  let component: HomeCarouselCardComponent;
  let fixture: ComponentFixture<HomeCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCarouselCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
