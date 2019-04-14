import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class ViaCepService {

   constructor(private http: HttpClient) { }

    public buscarCep(cep: string) {
        
        return this.http
            .get(`https://viacep.com.br/ws/${cep}/json/unicode/`);
    }

}