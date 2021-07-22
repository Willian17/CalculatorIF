import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatePFComponent } from './components/calculate-pf/calculate-pf.component';
import { CalculateGeneralAvarage } from './components/calculate-general-average/calculate-general-average.component';
import { CalculateMinimumFourBimester } from './components/calculate-minimum-four-bimester/calculate-minimum-four-bimester.component';
import { CalculateBimesterAverage } from './components/calculate-bimester-average/calculate-bimester-average.component';

const routes: Routes = [
  {
    path: "",
    component: CalculateMinimumFourBimester
  },
  {
    path: "general-avarage",
    component: CalculateGeneralAvarage
  },
  {
    path: "bimester-avarage",
    component: CalculateBimesterAverage
  },
  {
    path: "pf",
    component: CalculatePFComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
