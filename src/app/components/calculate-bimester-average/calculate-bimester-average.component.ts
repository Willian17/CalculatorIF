import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GradeCalculateAverageModel } from 'src/shared/models/GradeCalculateAverageModel';

@Component({
  selector: 'app-calculate-bimester-average',
  templateUrl: './calculate-bimester-average.component.html',
  styleUrls: ['./calculate-bimester-average.css']
})
export class CalculateBimesterAverage implements OnInit {
  grades = new GradeCalculateAverageModel();

  avarageBimester: number;
  
  constructor(
    private snackBar: MatSnackBar
  ){

  }
  
  ngOnInit(): void {
  }
  
  calculate(): void {
    const {grade1, grade2, grade3, attitudinal} = this.grades
    this.avarageBimester = this.calculateAvarageBimester(
        grade1, 
        grade2, 
        grade3,
        attitudinal 
    )
    this.showResult();
  }
  
  calculateAvarageBimester(grade1: number, grade2:number, grade3:number | undefined, attitudinal:number): number{
    const sizeGradeAvarage = 0.8;
    const avarageBimester: number = !grade3 ? 
    (((+grade1 + +grade2 ) / 2) * sizeGradeAvarage) + +attitudinal : 
    (((+grade1 + +grade2 + +grade3) / 3) * sizeGradeAvarage) + +attitudinal
    return isNaN(avarageBimester) || typeof avarageBimester === 'string' ? undefined : +avarageBimester.toFixed(2)
  }
  showResult() { 
    if(this.avarageBimester){
      return this.openSnackBarResult(`Média Bimestral: ${this.avarageBimester}`, 'X')
    }
 }

 openSnackBarResult(message: string, action: string) {
   this.snackBar.open(message, action);
 }


}
