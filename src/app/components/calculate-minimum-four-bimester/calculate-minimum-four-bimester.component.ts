import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeMinimumGradeForFourBimesterModel } from 'src/shared/models/GradeMinimumGradeForFourBimesterModel';
import { roundFloat } from 'src/shared/utils/roundFloat';

@Component({
  selector: 'app-calculate-minimum-four-bimester',
  templateUrl: './calculate-minimum-four-bimester.component.html',
  styleUrls: ['./calculate-minimum-four-bimester.component.css']
})
export class CalculateMinimumFourBimester implements OnInit {
  
  grades = new GradeMinimumGradeForFourBimesterModel();

  minimumGradeForFourBimester: number;
  
  constructor(
    private snackBar: MatSnackBar
  ){

  }
  
  ngOnInit(): void {
  }
  
  calculate(): void {
    const {firstBimester, secondBimester, thirdBimester} = this.grades
    this.minimumGradeForFourBimester = this.calculateMinimumGradeForFourBimester(
      firstBimester, 
      secondBimester, 
      thirdBimester 
    )
    this.showResult();
  }


  calculateMinimumGradeForFourBimester(gradeBimester1: number, gradeBimester2:number, gradeBimester3:number): number { 
    const minimumTotal = 60;
    const weightBimester1And2 = 2;
    const weightBimester3 = 3;
    const result: number = (minimumTotal - 
      ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2) + (+gradeBimester3 * weightBimester3))) / 3
    return isNaN(result) ? undefined : roundFloat(result, -2);
  }

  formatNumber(event, variable: string) {
    let num = event.target.value;
    num = num.replace(',', '.');
    num = +num;
    if(num > 10) {
      num = 10;
    }
    if(num < 0) {
      num = 0;
    }
    this.grades[variable] = num;
  }

  showResult() { 
    const isNotApproved = this.minimumGradeForFourBimester > 0 && this.minimumGradeForFourBimester <= 10;
    const isApproved = this.minimumGradeForFourBimester <= 0;
    const isPF = this.minimumGradeForFourBimester > 10;
    let message: string = undefined;
    if (isNotApproved) {
      message = `Nota Mínima no 4° bimestre: ${this.minimumGradeForFourBimester}`;
    }
    if (isApproved) {
      message = `Você foi aprovado(a)`;
    }
    if (isPF) {
      message = `Você está de PF`;
    }
    if(message) {
     return this.openSnackBarResult(message, 'X')
    }
  }

  openSnackBarResult(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
