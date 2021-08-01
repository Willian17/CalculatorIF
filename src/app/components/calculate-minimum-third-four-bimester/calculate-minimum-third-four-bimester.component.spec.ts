import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateMinimumThirdFourBimesterComponent } from './calculate-minimum-third-four-bimester.component';

describe('CalculateMinimumThirdFourBimesterComponent', () => {
  let component: CalculateMinimumThirdFourBimesterComponent;
  let fixture: ComponentFixture<CalculateMinimumThirdFourBimesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateMinimumThirdFourBimesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateMinimumThirdFourBimesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
