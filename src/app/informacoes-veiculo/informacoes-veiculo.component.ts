import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes-veiculo',
  templateUrl: './informacoes-veiculo.component.html',
  styleUrls: ['./informacoes-veiculo.component.css']
})
export class InformacoesVeiculoComponent implements OnInit {

  dados: any;

  constructor() { }

  ngOnInit() {

    this.dados = {
      placa: 'ANH-5472',
      valor: 12.58,
      chegaraEm: 16
    }
  }



}
