import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cooperado } from 'src/app/components/cooperado/models/cooperado.model';
import { CardInfo } from './models/card-info.model';

@Component({
  selector: 'amcom-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss']
})
export class CardDefaultComponent{

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() listaInformacoes?: Array<CardInfo>;

}
