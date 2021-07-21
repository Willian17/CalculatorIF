import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-pf',
  templateUrl: './calcular-pf.component.html',
  styleUrls: ['./calcular-pf.component.css']
})
export class CalcularPFComponent implements OnInit {
  grades = {
    generalAverage: undefined,
  }
  minimumFromPF: number;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): void {
    const makeSoundMs = 1000;
  
    this.minimumFromPF = this.calculateMinimumFromPF(
      this.grades.generalAverage
    )
    setTimeout(()=>{
      this.makeSound(+this.minimumFromPF)
    }, makeSoundMs)
  }

  
  calculateMinimumFromPF(generalAverage: number): number{
    const endAverage = 10;
    const result: number = endAverage - generalAverage
    return isNaN(result) ? undefined : +result.toFixed(2)
  }

  makeSound(result: number){
    const needFromPF = result > 4;
    const baseUrlAudio =  '../../../assets'
    const pauseSoundMs = 5000;
    if(needFromPF){
      var audio = new Audio(`${baseUrlAudio}/sifudeu.mp3`)
    } else {
      var audio = new Audio(`${baseUrlAudio}/tetra.mp3`)
    }
    audio.play()
    setTimeout(()=> {
      audio.pause()
    }, pauseSoundMs)
  }

}
