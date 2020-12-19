import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calcular-pf',
  templateUrl: './calcular-pf.component.html',
  styleUrls: ['./calcular-pf.component.css']
})
export class CalcularPFComponent implements OnInit {
  notas = {
    mediaGeral: undefined,
  }
  resultado: string = '';

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  calcular(): void {
  
    const resultado = this.calculatorService.quantoPrecisoParaPf(
      this.notas.mediaGeral
     )
    if(resultado){
        this.resultado = resultado
        setTimeout(()=>{
        this.emitirSom(+this.resultado)
      }, 1000)
    } else {
      this.resultado = ''
    }
  }

  emitirSom(resultado: number){
    const baseUrlAudio =  '../../../assets'
    if(resultado > 4){ // precisa de pf
      var audio = new Audio(`${baseUrlAudio}/sifudeu.mp3`)
    } else { // não precisa de pf
      var audio = new Audio(`${baseUrlAudio}/tetra.mp3`)
    }
    audio.play()
    setTimeout(()=> {
      audio.pause()
    }, 5000)
  }

}
