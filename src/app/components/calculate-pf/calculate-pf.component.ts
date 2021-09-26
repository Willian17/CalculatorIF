import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeCalculatePFModel } from 'src/shared/models/GradeCalculatePFModel';
import { roundFloat } from 'src/shared/utils/roundFloat';

@Component({
  selector: 'app-calculate-pf',
  templateUrl: './calculate-pf.component.html',
  styleUrls: ['./calculate-pf.component.css']
})
export class CalculatePFComponent implements OnInit {
  grades = new GradeCalculatePFModel();
  minimumFromPF: number;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  calculate(): void {
    this.minimumFromPF = this.calculateMinimumFromPF(
      this.grades.generalAverage
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


  
  calculateMinimumFromPF(generalAverage: number): number{
    const endAverage = 10;
    const result: number = endAverage - +generalAverage
    return isNaN(result) ? undefined : roundFloat(result, -2)
  }

  showResult() { 
    const needPF = this.minimumFromPF > 4;
    let message: string = undefined;
    if (needPF) {
      message = `Nota Mínima na PF: ${this.minimumFromPF}`;
    } else {
      message = `Você não precisa de PF`;
    }
     return this.openSnackBarResult(message, 'X')
  }

  openSnackBarResult(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
