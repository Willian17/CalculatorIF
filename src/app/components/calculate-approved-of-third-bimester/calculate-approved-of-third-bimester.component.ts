import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeCalculateApprovedThirdBimesterModel } from 'src/shared/models/GradeCalculateApprovedThirdBimesterModel';
import { roundFloat } from 'src/shared/utils/roundFloat';

@Component({
  selector: 'app-calculate-approved-of-third-bimester',
  templateUrl: './calculate-approved-of-third-bimester.component.html',
  styleUrls: ['./calculate-approved-of-third-bimester.component.css']
})
export class CalculateApprovedOfThirdBimesterComponent implements OnInit {

  grades = new GradeCalculateApprovedThirdBimesterModel();

  minimumGradeApprovedThirdBimester: number;
  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  calculate(): void {
    const {firstBimester, secondBimester} = this.grades
    this.minimumGradeApprovedThirdBimester = this.calculateMinimumGradeApprovedThirdBimester(
      firstBimester, 
      secondBimester
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


  calculateMinimumGradeApprovedThirdBimester(gradeBimester1: number, gradeBimester2: number): number { 
    const minimumTotal = 60;
    const weightBimester1And2 = 2;
    const result: number = (minimumTotal - 
      ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2))) / 3
    return isNaN(result) ? undefined : +result.toFixed(2);
  }

  showResult() { 
    const isPossibleApproved = this.minimumGradeApprovedThirdBimester > 0 && this.minimumGradeApprovedThirdBimester <= 10;
    const isApproved = this.minimumGradeApprovedThirdBimester <= 0;
    const isNotPossibleApproved = this.minimumGradeApprovedThirdBimester > 10;
    let message: string = undefined;
    if (isPossibleApproved) {
      message = `Nota Mínima 3° bimestre: ${this.minimumGradeApprovedThirdBimester}`;
    }
    if (isApproved) {
      message = `Você foi aprovado(a)`;
    }
    if (isNotPossibleApproved) {
      message = `Não é possível ser aprovado no 3° bimestre`;
    }
    if(message) {
     return this.openSnackBarResult(message, 'X')
    }
  }

  openSnackBarResult(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
