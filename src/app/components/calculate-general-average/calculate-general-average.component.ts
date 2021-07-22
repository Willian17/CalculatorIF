import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-general-average',
  templateUrl: './calculate-general-average.component.html',
  styleUrls: ['./calculate-general-average.component.css']
})
export class CalculateGeneralAvarage implements OnInit {
  grades = {
    firstBimester: undefined,
    secondBimester: undefined,
    thirdBimester: undefined,
    fourthBimester: undefined,
  }

  generalAverage: number;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): void {
    const makeSoundMs = 1000;
    const {firstBimester, secondBimester, thirdBimester, fourthBimester} = this.grades
    this.generalAverage = this.calculateGeneralAverage(
      firstBimester, 
      secondBimester, 
      thirdBimester, 
      fourthBimester
    )
    if(this.generalAverage !== undefined){ 
      setTimeout(()=>{
        this.makeSound(+this.generalAverage)
      }, makeSoundMs)
    }  
   }

   calculateGeneralAverage(notaBimester1: number, notaBimester2:number, notaBimester3:number, notaBimester4:number): number{
    const generalAverage: number = (60 - ((notaBimester1 * 2) + (notaBimester2 * 2) + (notaBimester3 * 3) + (notaBimester4 * 3)))
    return isNaN(generalAverage) ? undefined : +generalAverage.toFixed(2)
  }

   makeSound(generalAverage: number){
     const approved = generalAverage <= 0;
     const baseUrlAudio =  '../../../assets'
     const pauseSoundMs = 5000;
     if(approved){
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
