import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeCalculatePFModel } from 'src/shared/models/GradeCalculatePFModel';

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

  
  calculateMinimumFromPF(generalAverage: number): number{
    const endAverage = 10;
    const result: number = endAverage - +generalAverage
    return isNaN(result) ? undefined : +result.toFixed(2)
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
