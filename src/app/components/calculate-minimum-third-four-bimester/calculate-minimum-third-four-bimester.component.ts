import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeMinimumGradeForThirdAndFourBimesterModel } from 'src/shared/models/GradeMinimumGradeForThirdAndFourBimesterModel';
import { roundFloat } from 'src/shared/utils/roundFloat';

@Component({
  selector: 'app-calculate-minimum-third-four-bimester',
  templateUrl: './calculate-minimum-third-four-bimester.component.html',
  styleUrls: ['./calculate-minimum-third-four-bimester.component.css']
})
export class CalculateMinimumThirdFourBimesterComponent implements OnInit {

  grades = new GradeMinimumGradeForThirdAndFourBimesterModel();

  minimumGradeForThirdAndFourBimester: number;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  calculate(): void {
    const {firstBimester, secondBimester} = this.grades
    this.minimumGradeForThirdAndFourBimester = this.calculateminimumGradeForThirdAndFourBimester(
      firstBimester, 
      secondBimester
    )
    this.showResult();
  }


  calculateminimumGradeForThirdAndFourBimester(gradeBimester1: number, gradeBimester2: number): number { 
    const minimumTotal = 60;
    const weightBimester1And2 = 2;
    const result: number = (minimumTotal - 
      ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2))) / 6
    return isNaN(result) ? undefined : roundFloat(result, -2);
  }

  showResult() { 
    const isNotApproved = this.minimumGradeForThirdAndFourBimester > 0 && this.minimumGradeForThirdAndFourBimester <= 10;
    const isApproved = this.minimumGradeForThirdAndFourBimester <= 0;
    const isPF = this.minimumGradeForThirdAndFourBimester > 10;
    let message: string = undefined;
    if (isNotApproved) {
      message = `Nota Mínima no 3° e 4° bimestre: ${this.minimumGradeForThirdAndFourBimester}`;
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
