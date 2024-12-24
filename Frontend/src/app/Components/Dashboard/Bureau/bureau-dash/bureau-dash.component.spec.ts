import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauDashComponent } from './bureau-dash.component';

describe('BureauDashComponent', () => {
  let component: BureauDashComponent;
  let fixture: ComponentFixture<BureauDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BureauDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
