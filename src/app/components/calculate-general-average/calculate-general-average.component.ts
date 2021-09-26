import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeCalculateGeneralAverageModel } from 'src/shared/models/GradeCalculateGeneralAverageModel';
import { roundFloat } from 'src/shared/utils/roundFloat';

@Component({
  selector: 'app-calculate-general-average',
  templateUrl: './calculate-general-average.component.html',
  styleUrls: ['./calculate-general-average.component.css']
})
export class CalculateGeneralAvarage implements OnInit {
  grades = new GradeCalculateGeneralAverageModel();
  generalAverage: number;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  calculate(): void {
    const {firstBimester, secondBimester, thirdBimester, fourthBimester} = this.grades
    this.generalAverage = this.calculateGeneralAverage(
      firstBimester, 
      secondBimester, 
      thirdBimester, 
      fourthBimester
    )
    this.showResult();
   }

   formatNumber(event, variable: string) {
    let num = event.target.value;
    num = num.replace(',', '.');
    num = +num;
    num = roundFloat(num, -2);
    if(num > 10) {
      num = 10;
    }
    if(num < 0) {
      num = 0;
    }
    this.grades[variable] = num;
  }

   calculateGeneralAverage(notaBimester1: number, notaBimester2:number, notaBimester3:number, notaBimester4:number): number{
    const generalAverage: number = ((+notaBimester1 * 2) + (+notaBimester2 * 2) + (+notaBimester3 * 3) + (+notaBimester4 * 3)) / 10;
    return isNaN(generalAverage) ? undefined : roundFloat(generalAverage, -2)
  }

  showResult() { 
    if(this.generalAverage){
      return this.openSnackBarResult(`Média Geral: ${this.generalAverage}`, 'X')
    }
  }

  openSnackBarResult(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
