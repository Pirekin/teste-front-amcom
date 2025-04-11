import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cooperado } from '../models/cooperado.model';
import { StatusCPF } from '../enum/cpfStatus.enum';

@Injectable({providedIn: 'root'})

export class CooperadoAPI {

    private readonly API_COOPERADO = 'http://api-cooperado-bff';

    private MOCK_COOPERADO: Cooperado = {
        nome: 'Mariane de Sousa Oliveira',
        cpf: '111.222.333-44',
        situacaoCPF: StatusCPF.REGULAR,
        contaAplicacao: '557932-4',
        contaCorrente: '778461-8'
    }

    constructor(private httpClient: HttpClient) { }
    
    consultarCPF(cpf: string): Observable<Cooperado> {
        //Caso fosse bater numa api.
        //return this.httpClient.post<Cooperado>(`${this.API_COOPERADO}/consultar`, cpf);

        //Retornando mock
        return of(this.MOCK_COOPERADO);
      }
}