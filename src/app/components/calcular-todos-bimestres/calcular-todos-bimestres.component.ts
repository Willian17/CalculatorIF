import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calcular-todos-bimestres',
  templateUrl: './calcular-todos-bimestres.component.html',
  styleUrls: ['./calcular-todos-bimestres.component.css']
})
export class CalcularTodosBimestresComponent implements OnInit {
  notas = {
    primeiroBimestre: undefined,
    segundoBimestre: undefined,
    terceiroBimestre: undefined,
    quartoBimestre: undefined,
  }

  resultado: string = ''

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  calcular(): void {
    const {primeiroBimestre, segundoBimestre, terceiroBimestre, quartoBimestre} = this.notas
      const resultado = this.calculatorService.mediaTodosOsBimestres(
        primeiroBimestre, 
        segundoBimestre, 
        terceiroBimestre, 
        quartoBimestre
        )

        console.log(resultado)

        if(resultado){
          this.resultado = resultado
          setTimeout(()=>{
            this.emitirSom(+this.resultado)
          }, 1000)
        } else {
          this.resultado = '';
        }
  
   }

   emitirSom(resultado: number){
     const baseUrlAudio =  '../../../assets'
     if(resultado <= 0){ // passou de ano
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
