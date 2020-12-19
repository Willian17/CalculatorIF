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
import { CalcularTodosBimestresComponent } from './components/calcular-todos-bimestres/calcular-todos-bimestres.component';
import { CalcularTresBimestresComponent } from './components/calcular-tres-bimestres/calcular-tres-bimestres.component';
import { CalcularUmBimestreComponent } from './components/calcular-um-bimestre/calcular-um-bimestre.component';
import { CalcularPFComponent } from './components/calcular-pf/calcular-pf.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    CalcularTodosBimestresComponent,
    CalcularTresBimestresComponent,
    CalcularUmBimestreComponent,
    CalcularPFComponent
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
