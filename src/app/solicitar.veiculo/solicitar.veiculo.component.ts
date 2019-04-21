import { Component, OnInit, Input } from '@angular/core';
import { ICep } from '../interface/cep-interface';
import { ViaCepService } from '../service/via-cep.service';
import { Observable } from 'rxjs';
import { IViagem } from '../interface/viagem-interface';
import { ViagemService } from '../service/viagem.service';
import { isEmpty } from 'rxjs/operators';
import { IViagemRetorno } from '../interface/viagem-retorno-interface';

@Component({
  selector: 'app-solicitar-veiculo',
  templateUrl: './solicitar.veiculo.component.html',
  styleUrls: ['./solicitar.veiculo.component.css']
})
export class SolicitarVeiculoComponent implements OnInit {

  @Input() clienteLocalizacao : string;
  @Input() clienteDestino : string;
  @Input() numeroAtualCliente : number;
  @Input() numeroDestinoCliente : number;
  localizacaoAtual   = 'Localizacao Atual';
  localizacaoDestino = 'Localizacao Destino';

  constructor(private viaCepService: ViaCepService, private viagemService: ViagemService) { }

  ngOnInit() { }

  private preencherLocalizacao(localizacao: string, elementoAtualizar: string): void {
    this.buscarLocalizacao(localizacao, elementoAtualizar)
  }

  private buscarLocalizacao(cep: string, elementoAtualizar: string): void {
    this.viaCepService
      .buscarCep(cep)
      .subscribe((infos: ICep)=>{
        console.log(infos)
        if(elementoAtualizar=='atual')
          this.localizacaoAtual = this.formatarLocalizacao(infos)
        else 
          this.localizacaoDestino = this.formatarLocalizacao(infos)
      }, (error)=>{
        console.log(error.message)
      });
  }

  private formatarLocalizacao(localizacao: ICep): string {
    if(localizacao.logradouro != '') {
      return localizacao.logradouro.concat(' - ', localizacao.bairro, ', ', localizacao.localidade, ' - ', localizacao.uf)
    }
    return "";
  }

  private solicitarVeiculoDisponivel() {
    let viagem = this.montarViagem();
    if(this.validarViagem(viagem)) {
      this.viagemService
        .iniciarViagem(viagem)
        .subscribe(
          (viagemRetorno: IViagemRetorno)=>{
            
          },
          (error:any)=>{
            console.log(error.message);
          }
        )
    }

  }

  private montarViagem(): IViagem {
    return {
      "cepAtual":this.clienteLocalizacao, 
      "numeroAtual":this.numeroAtualCliente,
      "cepDestino":this.clienteDestino,
      "numeroDestino":this.numeroDestinoCliente,
      "cliente":sessionStorage.getItem('cliente')
    };
  }

  private validarViagem(viagem: IViagem): boolean {

    if(
      (viagem.cepAtual != '')
      && (viagem.cepDestino != '')
      && (viagem.numeroAtual > 0)
      && (viagem.numeroDestino > 0)
      && (viagem.cliente != '')
    ) {
      return true;
    }

    return false;
  }

}
