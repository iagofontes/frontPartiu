import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// imports Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitarVeiculoComponent } from './solicitar.veiculo/solicitar.veiculo.component';
import { NaoEncontradoComponent } from './nao.encontrado/nao.encontrado.component';
import { InicioComponent } from './inicio/inicio.component';
import { SnackBarMessageComponent } from './inicio/inicio.component';
import { TopoComponent } from './topo/topo.component';
import { InformacoesVeiculoComponent } from './informacoes-veiculo/informacoes-veiculo.component';
import { InformacoesCorridaComponent } from './informacoes-corrida/informacoes-corrida.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitarVeiculoComponent,
    NaoEncontradoComponent,
    InicioComponent,
    SnackBarMessageComponent,
    TopoComponent,
    InformacoesVeiculoComponent,
    InformacoesCorridaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  entryComponents: [
    SnackBarMessageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
