import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalculateApprovedOfThirdBimesterComponent } from './calculate-approved-of-third-bimester.component';

describe('CalculateApprovedOfThirdBimesterComponent', () => {
  let component: CalculateApprovedOfThirdBimesterComponent;
  let fixture: ComponentFixture<CalculateApprovedOfThirdBimesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateApprovedOfThirdBimesterComponent ],
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateApprovedOfThirdBimesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
