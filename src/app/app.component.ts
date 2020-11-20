import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Calculadora IF';
  
  notas = {
    primeiroBimestre: undefined,
    segundoBimestre: undefined,
    terceiroBimestre: undefined,
    
  }

  resultado: string = ''
  
  constructor(private calculatorService: CalculatorService){

  }
  
  
  calcular(): void {
   this.resultado = this.calculatorService.quantoFaltaParaOQuartoBim(
      this.notas.primeiroBimestre, 
      this.notas.segundoBimestre, 
      this.notas.terceiroBimestre )
  }
}
