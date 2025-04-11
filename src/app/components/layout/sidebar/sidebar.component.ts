import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from './models/menu';
import { SVG_ICONS } from '../../../shared/icons/svg-paths'

@Component({
  selector: 'amcom-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  listaMenu: Array<menu> = [
    {nome: "Home", iconePath: SVG_ICONS.HOME, rota:"/"},
    {nome: "FecharMenu", iconePath: SVG_ICONS.MENU, rota:""},
    {nome: "Pesquisar", iconePath: SVG_ICONS.SEARCH, rota:"/cooperado"},
    {nome: "Favoritos", iconePath: SVG_ICONS.STAR, rota:""},
    {nome: "Mensagens", iconePath: SVG_ICONS.MESSAGE, rota:""},
    {nome: "Relatórios", iconePath: SVG_ICONS.REPORT, rota:""},
    {nome: "Institucional", iconePath: SVG_ICONS.INSTITUCIONAL, rota:""}
  ];

  constructor(private router: Router) {}

  navegar(rota: string): void{
    this.router.navigate([rota]);
  }

}
