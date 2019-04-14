import { Component, OnInit, Input } from '@angular/core';
import { ICep } from '../interface/cep-interface';
import { ViaCepService } from '../service/via-cep.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solicitar-veiculo',
  templateUrl: './solicitar.veiculo.component.html',
  styleUrls: ['./solicitar.veiculo.component.css']
})
export class SolicitarVeiculoComponent implements OnInit {

  @Input() clienteLocalizacao : String;
  @Input() clienteDestino : String;
           localizacaoAtual   = 'Localizacao Atual';
           localizacaoDestino = 'Localizacao Destino';

  constructor(private viaCepService: ViaCepService) { }

  ngOnInit() { }

  preencherLocalizacao(localizacao: string, elementoAtualizar: string): void {
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

}
