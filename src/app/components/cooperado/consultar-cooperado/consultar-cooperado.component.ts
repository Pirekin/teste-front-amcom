import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cooperado } from '../models/cooperado.model';
import { CooperadoAPI } from '../services/cooperado.api';

@Component({
  selector: 'amcom-consultar-cooperado',
  templateUrl: './consultar-cooperado.component.html',
  styleUrls: ['./consultar-cooperado.component.scss']
})
export class ConsultarCooperadoComponent implements OnInit{

  cooperado?: Cooperado;
  cooperadoInexistente = false;
  formularioCpf!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cooperadoAPI: CooperadoAPI) { }

  ngOnInit(): void {
    this.formularioCpf = this.fb.group({
      cpf: ['', [Validators.required, Validators.minLength(14)]]
    });
  }

  validarCPF(): void {
    if (this.formularioCpf.valid) {
      const cpf = this.formularioCpf.value.cpf;
      this.cooperadoAPI.consultarCPF(cpf).subscribe(cooperado => {
        if(cooperado.cpf === cpf){
          this.cooperado = cooperado;
          this.cooperadoInexistente = false;
        }
        else{
          this.cooperadoInexistente = true;
          this.cooperado = undefined;
        }
      });
    }
  }

}
