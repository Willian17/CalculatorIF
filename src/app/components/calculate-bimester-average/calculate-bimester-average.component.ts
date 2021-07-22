import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-bimester-average',
  templateUrl: './calculate-bimester-average.component.html',
  styleUrls: ['./calculate-bimester-average.css']
})
export class CalculateBimesterAverage implements OnInit {
  grades = {
    grade1: undefined,
    grade2: undefined,
    grade3: undefined,
    attitudinal: undefined,
  }

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
    const avarageBimester: number = grade3 == undefined || grade3 == null ? 
    (((grade1 + grade2 )/ 2) * sizeGradeAvarage) + attitudinal : 
    (((grade1 + grade2 + grade3) / 3) * sizeGradeAvarage) + attitudinal
    return isNaN(avarageBimester) ? undefined : +avarageBimester.toFixed(2)
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
