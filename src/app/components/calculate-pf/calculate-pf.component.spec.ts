import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalculatePFComponent } from './calculate-pf.component';

describe('Calculate Minimum PF component', () => {
  let component: CalculatePFComponent;
  let fixture: ComponentFixture<CalculatePFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatePFComponent ],
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should return minimum PF of calculateMinimumFromPF', () => {
    const result = component.calculateMinimumFromPF(6);
    expect(result).toBe(4);
  })

  it('should return undefined with param undefined of calculateMinimumFromPF', () => {
    const result = component.calculateMinimumFromPF(undefined);
    expect(result).toBe(undefined);
  })

  it('should return 10 with params string void of calculateMinimumFromPF', () => {
    const result = component.calculateMinimumFromPF('' as any);
    expect(result).toBe(10);
  })

  it('should return MinimumPF of calculate', () => {
    component.grades = {
        generalAverage: 6,
    }
    const result = component.calculate();
    expect(component.minimumFromPF).toBe(4);
  })
  
  it('should called function MinimumGradeForFourBimester in calculate', () => {
    spyOn(component, 'calculateMinimumFromPF');
    component.grades = {
        generalAverage: 6,
    }
    const result = component.calculate();
    expect(component.calculateMinimumFromPF).toHaveBeenCalled();
  })
});
