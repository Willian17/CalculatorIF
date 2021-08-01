import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalculateMinimumThirdFourBimesterComponent } from './calculate-minimum-third-four-bimester.component';

describe('CalculateMinimumThirdFourBimesterComponent', () => {
  let component: CalculateMinimumThirdFourBimesterComponent;
  let fixture: ComponentFixture<CalculateMinimumThirdFourBimesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateMinimumThirdFourBimesterComponent ],
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
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
