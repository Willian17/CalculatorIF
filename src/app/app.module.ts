import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './components/template/template/template.component';
import { CalculateGeneralAvarage } from './components/calculate-general-average/calculate-general-average.component';
import { CalculateMinimumFourBimester } from './components/calculate-minimum-four-bimester/calculate-minimum-four-bimester.component';
import { CalculateBimesterAverage } from './components/calculate-bimester-average/calculate-bimester-average.component';
import { CalculatePFComponent } from './components/calculate-pf/calculate-pf.component';
import { TesterComponent } from './components/tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    CalculateGeneralAvarage,
    CalculateMinimumFourBimester,
    CalculateBimesterAverage,
    CalculatePFComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
