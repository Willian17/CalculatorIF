import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-tres-bimestres',
  templateUrl: './calcular-tres-bimestres.component.html',
  styleUrls: ['./calcular-tres-bimestres.component.css']
})
export class CalcularTresBimestresComponent implements OnInit {
  
  grades = {
    firstBimester: undefined,
    secondBimester: undefined,
    thirdBimester: undefined,
  }

  minimumGradeForFourBimester: number;
  
  constructor(){

  }
  
  ngOnInit(): void {
  }
  
  calculate(): void {
    const makeSoundMs = 1000;
    const {firstBimester, secondBimester, thirdBimester} = this.grades
    this.minimumGradeForFourBimester = this.calculateMinimumGradeForFourBimester(
      firstBimester, 
      secondBimester, 
      thirdBimester 
    )
    if(this.minimumGradeForFourBimester !== undefined){
      setTimeout(()=>{
          this.makeSound(+this.minimumGradeForFourBimester)
      }, makeSoundMs)
    }

  }

  calculateMinimumGradeForFourBimester(gradeBimester1: number, gradeBimester2:number, gradeBimester3:number): number { 
    const minimumTotal = 60;
    const weightBimester1And2 = 2;
    const weightBimester3 = 3;
    const result: number = (minimumTotal - 
      ((gradeBimester1 * weightBimester1And2) + (gradeBimester2 * weightBimester1And2) + (gradeBimester3 * weightBimester3))) / 3
    console.log(result);
    return isNaN(result) ? undefined : + result.toFixed(2)
  }

  makeSound(result: number){
    const needAverage =  result > 0 && result <= 10;
    const approved = result <= 0;
    const pauseSoundMs = 5000;
    const baseUrlAudio =  '../../../assets'
    if(needAverage){
     var audio = new Audio(`${baseUrlAudio}/mais_ou_menos.mp3`)
    } else if(approved) {
     var audio = new Audio(`${baseUrlAudio}/tetra.mp3`)
    } else {
      var audio = new Audio(`${baseUrlAudio}/sifudeu.mp3`)
    }
    audio.play()
    setTimeout(()=> {
      audio.pause()
    }, pauseSoundMs)
  }

}
