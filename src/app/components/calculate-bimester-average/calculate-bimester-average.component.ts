import { Component, OnInit } from '@angular/core';
import { GradeCalculateAverageModel } from 'src/shared/models/GradeCalculateAverageModel';

@Component({
  selector: 'app-calculate-bimester-average',
  templateUrl: './calculate-bimester-average.component.html',
  styleUrls: ['./calculate-bimester-average.css']
})
export class CalculateBimesterAverage implements OnInit {
  grades = new GradeCalculateAverageModel();

  avarageBimester: number;
  
  constructor(){

  }
  
  ngOnInit(): void {
  }
  
  calculate(): void {
    const {grade1, grade2, grade3, attitudinal} = this.grades
    const makeSoundMs = 1000;
    this.avarageBimester = this.calculateAvarageBimester(
        grade1, 
        grade2, 
        grade3,
        attitudinal 
    )
    if(this.avarageBimester != undefined){
      setTimeout(()=>{
        this.makeSound(+this.avarageBimester)
      }, makeSoundMs)
    } 
  }
  
  calculateAvarageBimester(grade1: number, grade2:number, grade3:number | undefined, attitudinal:number): number{
    const sizeGradeAvarage = 0.8;
    const avarageBimester: number = !grade3 ? 
    (((+grade1 + +grade2 ) / 2) * sizeGradeAvarage) + +attitudinal : 
    (((+grade1 + +grade2 + +grade3) / 3) * sizeGradeAvarage) + +attitudinal
    return isNaN(avarageBimester) || typeof avarageBimester === 'string' ? undefined : +avarageBimester.toFixed(2)
  }

  makeSound(avarageBimester: number){
    const needAverage = avarageBimester > 0 && avarageBimester < 8;
    const approved = avarageBimester >= 8
    const baseUrlAudio =  '../../../assets'
    const pauseSoundMs = 5000;

    if(needAverage){
     var audio = new Audio(`${baseUrlAudio}/mais_ou_menos.mp3`)
    } else if(approved) {
     var audio = new Audio(`${baseUrlAudio}/se_o_bichao.mp3`)
    } else {
      var audio = new Audio(`${baseUrlAudio}/sifudeu.mp3`)
    }
    audio.play()
    setTimeout(()=> {
      audio.pause()
    }, pauseSoundMs)
  }


}
