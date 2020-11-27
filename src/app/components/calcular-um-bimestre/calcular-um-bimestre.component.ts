import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calcular-um-bimestre',
  templateUrl: './calcular-um-bimestre.component.html',
  styleUrls: ['./calcular-um-bimestre.component.css']
})
export class CalcularUmBimestreComponent implements OnInit {
  notas = {
    nota1: undefined,
    nota2: undefined,
    nota3: undefined,
    atitudinal: undefined,
  }

  resultado: string = ''
  
  constructor(private calculatorService: CalculatorService){

  }
  
  ngOnInit(): void {
  }
  
  calcular(): void {
   this.resultado = this.calculatorService.mediaUmBimestre(
      this.notas.nota1, 
      this.notas.nota2, 
      this.notas.nota3,
      this.notas.atitudinal 
      )

      setTimeout(()=>{
        this.emitirSom(+this.resultado)
      }, 1000)
  }

  emitirSom(resultado: number){
    const baseUrlAudio =  '../../../assets'
    if(resultado > 0 && resultado < 8 ){ // precisa de média
     var audio = new Audio(`${baseUrlAudio}/mais_ou_menos.mp3`)
    } else if(resultado >= 8) { // passou de ano
     var audio = new Audio(`${baseUrlAudio}/se_o_bichao.mp3`)
    } else { // reprovou
      var audio = new Audio(`${baseUrlAudio}/sifudeu.mp3`)
    }
    audio.play()
    setTimeout(()=> {
      audio.pause()
    }, 5000)
  }


}
