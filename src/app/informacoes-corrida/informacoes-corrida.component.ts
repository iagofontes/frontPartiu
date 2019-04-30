import { Component, OnInit } from '@angular/core';
import { IOperarViagem } from '../interface/operar-viagem-interface';
import { ViagemService } from '../service/viagem.service';
import { Router } from '@angular/router';
import { IOperarViagemRetorno } from '../interface/operar-viagem-retorno-interface';
import { IViagemRetorno } from '../interface/viagem-retorno-interface';

@Component({
  selector: 'app-informacoes-corrida',
  templateUrl: './informacoes-corrida.component.html',
  styleUrls: ['./informacoes-corrida.component.css']
})
export class InformacoesCorridaComponent implements OnInit {

  public dados: IViagemRetorno;

  constructor(private viagemService: ViagemService, private route: Router) { }

  ngOnInit() {
    this.dados = JSON.parse(sessionStorage.getItem('viagem_retorno').toString());
  }

  public finalizarCorrida() {
    let operarViagem : IOperarViagem = {
      idViagem: this.dados.id,
      operacao: 'FINALIZAR'
    };

    this.viagemService
      .finalizarViagem(operarViagem)
      .subscribe(
        (finalizarRetorno: any)=>{
          if(finalizarRetorno.status == 200) {
            sessionStorage.removeItem('viagem_retorno');
            this.route.navigate(['/final']);
          } else {
            alert('Problemas ao finalizar corrida.');
          }
        },
        (error:any)=>{
          console.log(error.message);
          alert('Problemas ao processar solicitação');
        }
      )
  }

}
