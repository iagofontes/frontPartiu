import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes-corrida',
  templateUrl: './informacoes-corrida.component.html',
  styleUrls: ['./informacoes-corrida.component.css']
})
export class InformacoesCorridaComponent implements OnInit {

  dados: any;

  constructor() { }

  ngOnInit() {

    this.dados = {
      valor: 12.58,
      duracao: 65
    }
  }

}
