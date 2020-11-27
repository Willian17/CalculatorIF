import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calcular-tres-bimestres',
  templateUrl: './calcular-tres-bimestres.component.html',
  styleUrls: ['./calcular-tres-bimestres.component.css']
})
export class CalcularTresBimestresComponent implements OnInit {
  
  notas = {
    primeiroBimestre: undefined,
    segundoBimestre: undefined,
    terceiroBimestre: undefined,
    
  }

  resultado: string = ''
  
  constructor(private calculatorService: CalculatorService){

  }
  
  ngOnInit(): void {
  }
  
  calcular(): void {
   this.resultado = this.calculatorService.quantoFaltaParaOQuartoBim(
      this.notas.primeiroBimestre, 
      this.notas.segundoBimestre, 
      this.notas.terceiroBimestre )

      setTimeout(()=>{
        this.emitirSom(+this.resultado)
      }, 1000)

  }

  emitirSom(resultado: number){
    const baseUrlAudio =  '../../../assets'
    if(resultado > 0 && resultado <= 10){ // precisa de média
     var audio = new Audio(`${baseUrlAudio}/mais_ou_menos.mp3`)
    } else if(resultado <= 0) { // passou de ano
     var audio = new Audio(`${baseUrlAudio}/tetra.mp3`)
    } else { // reprovou
      var audio = new Audio(`${baseUrlAudio}/sifudeu.mp3`)
    }
    audio.play()
    setTimeout(()=> {
      audio.pause()
    }, 5000)
  }


}
