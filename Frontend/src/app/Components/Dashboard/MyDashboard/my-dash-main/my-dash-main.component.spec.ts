import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashMainComponent } from './my-dash-main.component';

describe('MyDashMainComponent', () => {
  let component: MyDashMainComponent;
  let fixture: ComponentFixture<MyDashMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDashMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDashMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
