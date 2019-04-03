import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitarVeiculoComponent } from './solicitar.veiculo/solicitar.veiculo.component';
import { AppComponent } from './app.component';
import { NaoEncontradoComponent } from './nao.encontrado/nao.encontrado.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'solicitarveiculo', component: SolicitarVeiculoComponent },
  { path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
