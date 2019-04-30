import { Component, OnInit } from '@angular/core';
import { IViagemRetorno } from '../interface/viagem-retorno-interface';
import { ViagemService } from '../service/viagem.service';
import { IOperarViagem } from '../interface/operar-viagem-interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-veiculo',
  templateUrl: './informacoes-veiculo.component.html',
  styleUrls: ['./informacoes-veiculo.component.css']
})
export class InformacoesVeiculoComponent implements OnInit {

  dados: IViagemRetorno;

  constructor(private viagemService: ViagemService, private route: Router) { }

  ngOnInit() {
    this.dados = JSON.parse(sessionStorage.getItem('viagem_retorno').toString());
  }

  public informarChegadaVeiculo() {
    let operarViagem : IOperarViagem = {
      idViagem: this.dados.id,
      operacao: 'INICIAR'
    };

    this.viagemService
      .informarChegadaVeiculo(operarViagem)
      .subscribe(
        (viagemRetorno: any)=>{
          if(viagemRetorno.status == 200) {
            sessionStorage.removeItem('viagem_retorno');
            sessionStorage.setItem('viagem_retorno', JSON.stringify(viagemRetorno.body));
            this.route.navigate(['/infoCorrida']);
          } else {
            alert('Problemas ao informar chegada de veículo');
          }
        },
        (error:any)=>{
          console.log(error.message);
          alert('Problemas ao processar solicitação');
        }
      )
  }

  public cancelarViagem() {
    this.viagemService
      .cancelarViagem(this.dados.id)
      .subscribe(
        (viagemRetorno: any)=>{
          if(viagemRetorno.status == 200 || viagemRetorno.status == 204) {
            sessionStorage.removeItem('viagem_retorno');
            this.route.navigate(['/']);
          } else {
            alert('Problemas ao informar chegada de veículo');
          }
        },
        (error:any)=>{
          console.log(error.message);
          alert('Problemas ao processar solicitação');
        }
      )
  }



}
