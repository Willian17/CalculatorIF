import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculateBimesterAverage } from './calculate-bimester-average.component';

describe('Calculate Bimester Average Component', () => {
  let component: CalculateBimesterAverage;
  let fixture: ComponentFixture<CalculateBimesterAverage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateBimesterAverage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateBimesterAverage);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate bimester-avarage function with three grades ', () => {
      const avarageBimester = component.calculateAvarageBimester(6, 6, 6, 2);
      expect(avarageBimester).toEqual(6.8);
  });

  it('should calculate bimester-avarage function with two grades ', () => {
      const avarageBimester = component.calculateAvarageBimester(6, 6, null, 2);
      expect(avarageBimester).toEqual(6.8);
  });

  it('should return undefined bimester-avarage function with grades and attitudinal undefined ', () => {
      const avarageBimester = component.calculateAvarageBimester(undefined, undefined, undefined, undefined);
      expect(avarageBimester).toEqual(undefined);
  });

  it('should return undefined bimester-avarage function with grade1 undefined', () => {
      const avarageBimester = component.calculateAvarageBimester(undefined, 6, 6, 2);
      expect(avarageBimester).toEqual(undefined);
  });

  it('should return undefined bimester-avarage function with grade2 undefined', () => {
      const avarageBimester = component.calculateAvarageBimester(6, undefined, 6, 2);
      expect(avarageBimester).toEqual(undefined);
  });

  it('should return undefined bimester-avarage function with attitudinal undefined', () => {
      const avarageBimester = component.calculateAvarageBimester(6, 6, 6, undefined);
      expect(avarageBimester).toEqual(undefined);
  });

  it('should return 0 bimester-avarage function with grades and attidinal type string void', () => {
      const avarageBimester = component.calculateAvarageBimester('' as any, '' as any, '' as any,  '' as any);
      expect(avarageBimester).toEqual(0);
  });

  it('should calculate bimester-avarage function with grade1 type string void', () => {
      const avarageBimester = component.calculateAvarageBimester('' as any, 6, 6,  2);
      expect(avarageBimester).toEqual(5.2);
  });

  it('should calculate bimester-avarage function with grade2 type string void', () => {
      const avarageBimester = component.calculateAvarageBimester(6, '' as any, 6,  2);
      expect(avarageBimester).toEqual(5.2);
  });

  it('should calculate bimester-avarage function with grade3 type string void', () => {
      const avarageBimester = component.calculateAvarageBimester(6, 6, '' as any,  2);
      expect(avarageBimester).toEqual(6.8);
  });

  it('should calculate bimester-avarage function with attitudinal type string void', () => {
      const avarageBimester = component.calculateAvarageBimester(6, 6, 6,  '' as any);
      expect(avarageBimester).toEqual(4.8);
   });

  it('should calculate bimester-avarage and atribue atribute correctly with three grades', () => {
      component.grades = {
        grade1: 6,
        grade2: 6,
        grade3: 6,
        attitudinal: 2
      };
      component.calculate();
      expect(component.avarageBimester).toEqual(6.8);
   });

  it('should calculate bimester-avarage and atribue atribute correctly with two grades', () => {
      component.grades = {
        grade1: 6,
        grade2: 6,
        attitudinal: 2
      };
      component.calculate();
      expect(component.avarageBimester).toEqual(6.8);
   });
   it('show called function calculateAvarageBimester in calculate', fakeAsync(() => {
    spyOn(component, 'calculateAvarageBimester');
    component.grades = {
      grade1: 6,
      grade2: 6,
      attitudinal: 2
    };
    component.calculate();
    expect(component.calculateAvarageBimester).toHaveBeenCalled();
   }))
});
