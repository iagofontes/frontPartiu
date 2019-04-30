import { Component, OnInit, Input } from '@angular/core';
import { ICep } from '../interface/cep-interface';
import { ViaCepService } from '../service/via-cep.service';
import { Observable } from 'rxjs';
import { IViagem } from '../interface/viagem-interface';
import { ViagemService } from '../service/viagem.service';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import { IViagemRetorno } from '../interface/viagem-retorno-interface';

@Component({
  selector: 'app-solicitar-veiculo',
  templateUrl: './solicitar.veiculo.component.html',
  styleUrls: ['./solicitar.veiculo.component.css']
})
export class SolicitarVeiculoComponent implements OnInit {

  @Input() clienteLocalizacao : string = '';
  @Input() clienteDestino : string = '';
  @Input() numeroAtualCliente : number = 0;
  @Input() numeroDestinoCliente : number = 0;
  localizacaoAtual   = 'Localizacao Atual';
  localizacaoDestino = 'Localizacao Destino';

  constructor(
    private viaCepService: ViaCepService, 
    private viagemService: ViagemService,
    private route: Router) { }

  ngOnInit() {
    sessionStorage.removeItem('viagem_retorno');
  }

  public preencherLocalizacao(localizacao: string, elementoAtualizar: string): void {
    this.buscarLocalizacao(localizacao, elementoAtualizar)
  }

  public buscarLocalizacao(cep: string, elementoAtualizar: string): void {
    this.viaCepService
      .buscarCep(cep)
      .subscribe((infos: ICep)=>{
        if(elementoAtualizar=='atual')
          this.localizacaoAtual = this.formatarLocalizacao(infos)
        else 
          this.localizacaoDestino = this.formatarLocalizacao(infos)
      }, (error)=>{
        alert('CEP não encontrado.');
        console.log(error.message);
      });
  }

  public formatarLocalizacao(localizacao: ICep): string {
    if(localizacao.logradouro != '') {
      return localizacao.logradouro.concat(' - ', localizacao.bairro, ', ', localizacao.localidade, ' - ', localizacao.uf)
    }
    return "";
  }

  public solicitarVeiculoDisponivel() {
    let viagem = this.montarViagem();

    if(this.validarViagem(viagem)) {
      this.viagemService
        .iniciarViagem(viagem)
        .subscribe(
          (viagemRetorno: any)=>{
            sessionStorage.setItem('viagem_retorno', JSON.stringify(viagemRetorno.body));
            this.route.navigate(['/infoVeiculo']);
          },
          (error:any)=>{
            console.log(error.message);
            alert('Problemas ao processar solicitação');
          }
        )
    } else {
      console.log('viagem inválida');
    }

  }

  public montarViagem(): IViagem {
    return {
      "cepAtual":this.clienteLocalizacao, 
      "numeroAtual":this.numeroAtualCliente,
      "cepDestino":this.clienteDestino,
      "numeroDestino":this.numeroDestinoCliente,
      "cliente":sessionStorage.getItem('cliente')
    };
  }

  public validarViagem(viagem: IViagem): boolean {

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
