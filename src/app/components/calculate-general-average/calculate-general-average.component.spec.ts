import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateGeneralAvarage } from './calculate-general-average.component';

describe('Calculate General Avarage Component', () => {
  let component: CalculateGeneralAvarage;
  let fixture: ComponentFixture<CalculateGeneralAvarage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateGeneralAvarage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateGeneralAvarage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should return GeneralAverage of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(6, 6, 6, 6);
    expect(result).toBe(6);
  })

  it('should return undefined with params undefined of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(undefined, undefined, undefined, undefined);
    expect(result).toBe(undefined);
  })

  it('should return undefined with param bimester1 undefined of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(undefined, 6, 6, 6);
    expect(result).toBe(undefined);
  })

  it('should return undefined with param bimester2 undefined of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(6, undefined, 6, 6);
    expect(result).toBe(undefined);
  })

  it('should return undefined with param bimester3 undefined of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(6, 6, undefined, 6);
    expect(result).toBe(undefined);
  })

  it('should return undefined with param bimester4 undefined of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(6, 6, 6, undefined);
    expect(result).toBe(undefined);
  })

  it('should return 0 with params string void of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage('' as any, '' as any, '' as any, '' as any);
    expect(result).toBe(0);
  })

  it('should return 4,8 with bimeter1 string void of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage('' as any, 6, 6, 6);
    expect(result).toBe(4.8);
  })

  it('should return 4,8 with bimeter2 string void of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(6, '' as any, 6, 6);
    expect(result).toBe(4.8);
  })

  it('should return 4,2 with bimeter3 string void of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(6, 6, '' as any, 6);
    expect(result).toBe(4.2);
  })

  it('should return 4,2 with bimeter4 string void of calculateGeneralAverage', () => {
    const result = component.calculateGeneralAverage(6, 6, 6, '' as any);
    expect(result).toBe(4.2);
  })

  it('should return GeneralAverage of calculate', () => {
    component.grades = {
      firstBimester: 6,
      secondBimester: 6,
      thirdBimester: 6,
      fourthBimester: 6
    }
    const result = component.calculate();
    expect(component.generalAverage).toBe(6);
  })
  
  it('should called function GeneralAverage in calculate', () => {
    spyOn(component, 'calculateGeneralAverage');
    component.grades = {
      firstBimester: 6,
      secondBimester: 6,
      thirdBimester: 6,
      fourthBimester: 6
    }
    const result = component.calculate();
    expect(component.calculateGeneralAverage).toHaveBeenCalled();
  })
});
