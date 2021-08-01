import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalculateMinimumFourBimester } from './calculate-minimum-four-bimester.component';

describe('Calculate Minimum Four Bimester component', () => {
  let component: CalculateMinimumFourBimester;
  let fixture: ComponentFixture<CalculateMinimumFourBimester>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateMinimumFourBimester ],
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateMinimumFourBimester);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should return minimum four bimester of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester(6, 6, 6);
    expect(result).toBe(6);
  })

  it('should return undefined with params undefined of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester(undefined, undefined, undefined);
    expect(result).toBe(undefined);
  })

  it('should return undefined with param bimester1 undefined of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester(undefined, 6, 6);
    expect(result).toBe(undefined);
  })

  it('should return undefined with param bimester2 undefined of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester(6, undefined, 6);
    expect(result).toBe(undefined);
  })

  it('should return undefined with param bimester3 undefined of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester(6, 6, undefined);
    expect(result).toBe(undefined);
  })

  it('should return 20 with params string void of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester('' as any, '' as any, '' as any);
    expect(result).toBe(20);
  })

  it('should return 10 with bimeter1 string void of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester('' as any, 6, 6);
    expect(result).toBe(10);
  })

  it('should return 10 with bimeter2 string void of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester(6, '' as any, 6);
    expect(result).toBe(10);
  })

  it('should return 12 with bimeter3 string void of calculateMinimumGradeForFourBimester', () => {
    const result = component.calculateMinimumGradeForFourBimester(6, 6, '' as any);
    expect(result).toBe(12);
  })

  it('should return MinimumGradeForFourBimester of calculate', () => {
    component.grades = {
      firstBimester: 6,
      secondBimester: 6,
      thirdBimester: 6,
    }
    const result = component.calculate();
    expect(component.minimumGradeForFourBimester).toBe(6);
  })
  
  it('should called function MinimumGradeForFourBimester and showResult in calculate', () => {
    spyOn(component, 'calculateMinimumGradeForFourBimester');
    spyOn(component, 'showResult');
    component.grades = {
      firstBimester: 6,
      secondBimester: 6,
      thirdBimester: 6
    }
    const result = component.calculate();
    expect(component.calculateMinimumGradeForFourBimester).toHaveBeenCalled();
    expect(component.showResult).toHaveBeenCalled();
  })
});
