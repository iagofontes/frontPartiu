import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IViagem } from '../interface/viagem-interface';

const serverPath = "";

@Injectable()
export class ViagemService {

    constructor(private http: HttpClient) { }

    public iniciarViagem(viagem: IViagem) {
        return this.http
            .post(
                serverPath+"/viagem", 
                viagem, 
                {
                    
                }
            )
    }

}