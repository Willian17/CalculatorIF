import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  quantoFaltaParaOQuartoBim(notaBimestre1: number, notaBimestre2:number, notaBimestre3:number): string{
    const somaDaNotaDosTresBimestres: number = (60 - ((notaBimestre1 * 2) + (notaBimestre2 * 2) + (notaBimestre3 * 3))) / 3
    return somaDaNotaDosTresBimestres.toFixed(2)
  }
}
