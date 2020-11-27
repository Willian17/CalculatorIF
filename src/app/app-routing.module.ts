import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcularTodosBimestresComponent } from './components/calcular-todos-bimestres/calcular-todos-bimestres.component';
import { CalcularTresBimestresComponent } from './components/calcular-tres-bimestres/calcular-tres-bimestres.component';
import { CalcularUmBimestreComponent } from './components/calcular-um-bimestre/calcular-um-bimestre.component';

const routes: Routes = [
  {
    path: "",
    component: CalcularTodosBimestresComponent
  },
  {
    path: "tres/bimestres",
    component: CalcularTresBimestresComponent
  },
  {
    path: "um/bimestre",
    component: CalcularUmBimestreComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
