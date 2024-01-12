import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CurrenciesService } from '../../../shared/services/currencies.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.css',
})
export class CurrencyCardComponent implements OnChanges {
  // input properties
  @Input() toCurrency: string = '';
  @Input() baseCurrency: string = 'EUR';
  @Input() amount: number = 0;
  //local var
  calculatedAmount: number = 0;

  constructor(private currencyServices: CurrenciesService) {}

  ngOnChanges() {
    // recalculate the converted amount evry time the input amount changes
    this.calculatedAmount = +this.currencyServices.getConvertedAmount(
      this.amount,
      this.baseCurrency,
      this.toCurrency
    );
  }
}
