import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { currencies } from '../../data/constants/currencies.constant';
import { CurrencyRates } from '../../data/interfaces/currencies.interface';
import { Observable, Subject, map } from 'rxjs';
import { CurrencyApiResponse } from '../../data/interfaces/CurrencyApiResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private fixerApi = environment.fixerApi;

  private currenciesRates: CurrencyRates = currencies;
  // base currency Event Emitter
  baseCurrency: EventEmitter<string> = new EventEmitter();
  // amount Event Emitter
  amount: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) {}

  // fetch latest rates
  fetchCurrenciesRates() {
    return this.http
      .get<CurrencyApiResponse>(
        `http://data.fixer.io/api/latest?access_key=${this.fixerApi}&format=1`
      )
      .pipe(
        map((response) => {
          return response.rates;
        })
      );
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
