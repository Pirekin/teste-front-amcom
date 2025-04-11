import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCooperadoComponent } from './consultar-cooperado/consultar-cooperado.component';

export const routes: Routes = [
  {
    path: '',
    component: ConsultarCooperadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CooperadoRoutingModule { }
