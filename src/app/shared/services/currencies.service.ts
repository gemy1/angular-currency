import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { currencies } from '../../data/constants/currencies.constant';
import { CurrencyRates } from '../../data/interfaces/currencies.interface';
import { map } from 'rxjs';
import { CurrencyApiResponse } from '../../data/interfaces/CurrencyApiResponse.interface';
import { API_URL } from '../../data/constants/api-url';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private currenciesRates: CurrencyRates = currencies;
  // base currency Event Emitter
  baseCurrency: EventEmitter<string> = new EventEmitter();
  // amount Event Emitter
  amount: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) {}

  // fetch latest rates
  fetchCurrenciesRates() {
    return this.http
      .get<CurrencyApiResponse>(API_URL)
      .pipe(
        map((response) => {
          return response.rates;
        })
      )
      .subscribe((rates) => {
        this.currenciesRates = rates;
      });
  }

  // retuen the total amount converted
  getConvertedAmount(amount: number, from: string, to: string): string {
    const result: number =
      (this.currenciesRates[to] / this.currenciesRates[from]) * amount;
    return result.toFixed(2);
  }

  // return the rate from currency to another ex: 1 EUR = 1.09 USD
  getConversionRate(from: string, to: string): string {
    const result: number =
      this.currenciesRates[to] / this.currenciesRates[from];

    return result.toFixed(3);
  }
}
