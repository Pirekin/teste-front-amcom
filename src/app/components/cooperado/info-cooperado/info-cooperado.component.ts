import { Component, Input, OnChanges } from '@angular/core';
import { CardInfo } from 'src/app/shared/card-default/models/card-info.model';
import { Cooperado } from '../models/cooperado.model';
import { SVG_ICONS } from '../../../shared/icons/svg-paths'

@Component({
  selector: 'amcom-info-cooperado',
  templateUrl: './info-cooperado.component.html',
  styleUrls: ['./info-cooperado.component.scss']
})
export class InfoCooperadoComponent implements OnChanges{

  @Input() cooperado!: Cooperado;

  cards: {
    title: string;
    subtitle?: string;
    infos: CardInfo[];
  }[] = [];

  ngOnChanges(): void {
    if (!this.cooperado) return;
    this.criarCards();
  }

  private criarCards(): void {

    this.cards.push({
      title: 'Situação cadastral do CPF',
      subtitle: 'Consulta na Receita Federal',
      infos: [
        {
          descricao: 'Nome',
          valor: this.cooperado.nome,
          icone: SVG_ICONS.USER
        },
        {
          descricao: 'Situação do CPF',
          valor: this.cooperado.situacaoCPF,
          icone: this.obterIconeCPF(this.cooperado.situacaoCPF)
        }
      ]
    });

    if (this.cooperado.contaAplicacao) {
      this.cards.push({
        title: 'Conta aplicação',
        subtitle: 'Cooperativa Viacredi',
        infos: [
          {
            descricao: 'Número da conta',
            valor: this.cooperado.contaAplicacao,
            icone: SVG_ICONS.CARD_BANK
          }
        ]
      });
    }

    if (this.cooperado.contaCorrente) {
      this.cards.push({
        title: 'Conta corrente',
        subtitle: 'Cooperativa Viacredi',
        infos: [
          {
            descricao: 'Principal conta',
            valor: this.cooperado.contaCorrente,
            icone: SVG_ICONS.CARD_BANK
          }
        ]
      });
    }
  }

  private obterIconeCPF(status: string): string {
    switch (status) {
      case 'REGULAR':
        return SVG_ICONS.CHECK_CIRCLE;
      case 'IRREGULAR':
        return SVG_ICONS.CLOSE_CIRCLE;
      default:
        return SVG_ICONS.INFO_CIRCLE;
    }
  }
}
