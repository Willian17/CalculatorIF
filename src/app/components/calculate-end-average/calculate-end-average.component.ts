import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeCalculateEndAverage } from 'src/shared/models/GradeCalculateEndAverage';
import { roundFloat } from 'src/shared/utils/roundFloat';

@Component({
  selector: 'app-calculate-end-average',
  templateUrl: './calculate-end-average.component.html',
  styleUrls: ['./calculate-end-average.component.css']
})
export class CalculateEndAverageComponent implements OnInit {

  grades = new GradeCalculateEndAverage();

  endAverage: number;
  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  calculate(): void {
    const {generalAverage, pf} = this.grades
    this.endAverage = this.calculateEndAverage(
      generalAverage, 
      pf
    )
    this.showResult();
   }

   calculateEndAverage(generalAverage: number, pf:number): number{
    const endAverage: number = (generalAverage + pf) / 2;
    return isNaN(endAverage) ? undefined : roundFloat(endAverage, -2)
  }

  showResult() { 
    const isApproved = this.endAverage >= 5;
    const message = isApproved ? `Média Final: ${this.endAverage}, aprovado(a)`: `Média Final: ${this.endAverage}, reprovado(a)`;
    if(this.endAverage){
      return this.openSnackBarResult(message, 'X')
    }
  }

  openSnackBarResult(message: string, action: string) {
    this.snackBar.open(message, action);
  }


}
