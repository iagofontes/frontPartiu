import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IViagem } from '../interface/viagem-interface';
import { IOperarViagem } from '../interface/operar-viagem-interface';

const serverPath = "https://calm-basin-48860.herokuapp.com/frota-service";

@Injectable()
export class ViagemService {

    header: HttpHeaders;

    constructor(private http: HttpClient) {
        this.header = new HttpHeaders();
        this.header.append('Content-Type', 'application/json');
        this.header.append('Accept', 'application/json');
    }

    public iniciarViagem(viagem: IViagem) {
        return this.http
            .post(
                serverPath+"/viagem/", 
                viagem, 
                {
                    headers: this.header,
                    observe: 'response'
                }
            )
    }

    public informarChegadaVeiculo(operarViagem: IOperarViagem) {
        return this.http
            .put(
                serverPath+"/viagem/"+operarViagem.idViagem.toString(), 
                operarViagem, 
                {
                    headers: this.header,
                    observe: 'response'
                }
            )
    }

    public cancelarViagem(idViagem: string) {
        return this.http
            .delete(
                serverPath+"/viagem/"+idViagem, 
                {
                    headers: this.header,
                    observe: 'response'
                }
            )
    }

    public finalizarViagem(operarViagem: IOperarViagem) {
        return this.http
            .put(
                serverPath+"/viagem/"+operarViagem.idViagem.toString(), 
                operarViagem, 
                {
                    headers: this.header,
                    observe: 'response'
                }
            )
    }
}