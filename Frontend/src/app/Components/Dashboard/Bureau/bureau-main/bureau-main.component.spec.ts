import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauMainComponent } from './bureau-main.component';

describe('BureauMainComponent', () => {
  let component: BureauMainComponent;
  let fixture: ComponentFixture<BureauMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BureauMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
