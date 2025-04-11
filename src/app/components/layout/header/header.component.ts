import { Component, Input } from '@angular/core';
import { SVG_ICONS } from '../../../shared/icons/svg-paths'

@Component({
  selector: 'amcom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  readonly ICON_BELL = SVG_ICONS.BELL;
  readonly ICON_USER_CIRCLE = SVG_ICONS.USER_CIRCLE;

  @Input() title = "Nova Admissão Cooperado"; //Nova Admissão Cooperado
  @Input() subtitle = "Cadastro / Admissão do Cooperado / Nova Admissão do Cooperado";

}
