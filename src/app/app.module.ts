import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { ViaCepService } from './service/via-cep.service';
import { ViagemService } from './service/viagem.service';

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
    HttpClientModule, 
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
  providers: [ 
    ViaCepService, 
    ViagemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
