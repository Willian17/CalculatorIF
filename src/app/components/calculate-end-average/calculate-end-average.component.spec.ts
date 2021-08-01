import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateEndAverageComponent } from './calculate-end-average.component';

describe('CalculateEndAverageComponent', () => {
  let component: CalculateEndAverageComponent;
  let fixture: ComponentFixture<CalculateEndAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateEndAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateEndAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
