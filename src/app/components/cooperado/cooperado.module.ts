import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarCooperadoComponent } from './consultar-cooperado/consultar-cooperado.component';
import { CooperadoRoutingModule } from './cooperado-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoCooperadoComponent } from './info-cooperado/info-cooperado.component';

@NgModule({
  declarations: [
    ConsultarCooperadoComponent,
    InfoCooperadoComponent,
  ],
  imports: [
    CommonModule,
    CooperadoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class CooperadoModule { }
