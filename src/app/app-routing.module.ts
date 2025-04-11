import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooperadoModule } from './components/cooperado/cooperado.module';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cooperado',
    loadChildren: () => import('./components/cooperado/cooperado.module').then(m => m.CooperadoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
