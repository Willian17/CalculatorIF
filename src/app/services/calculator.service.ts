import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  quantoFaltaParaOQuartoBim(notaBimestre1: number, notaBimestre2:number, notaBimestre3:number): string{
    const resultado: number = (60 - ((notaBimestre1 * 2) + (notaBimestre2 * 2) + (notaBimestre3 * 3))) / 3
    console.log('nota ' + resultado) 
    return resultado.toFixed(2)
  }
  mediaTodosOsBimestres(notaBimestre1: number, notaBimestre2:number, notaBimestre3:number, notaBimestre4:number): string{
    const resultado: number = (60 - ((notaBimestre1 * 2) + (notaBimestre2 * 2) + (notaBimestre3 * 3) + (notaBimestre4 * 3)))
    return resultado.toFixed(2)
  }
  mediaUmBimestre(nota1: number, nota2:number, nota3:number | undefined, atitudinal:number): string{
    const resultado: number = nota3 ? (((nota1 + nota2 + nota3)/3) * 0.8) + atitudinal : (((nota1 + nota2 )/2) * 0.8) + atitudinal
    console.log(resultado)
    return resultado.toFixed(2)
  }
}
