import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, concatAll } from 'rxjs';
import { API_URL_HISTORICAL } from '../../../data/constants/api-url';

interface HistoricalRate {
  timestamp: number;
  historical: boolean;
  base: string;
  date: string;
  rates: { [code: string]: number };
}

@Injectable({
  providedIn: 'root',
})
export class HistoricalRateService {
  constructor(private http: HttpClient) {}

  getRatesForDays(days: string[], currency: string) {
    // Create an array of observables
    const requests = days.map((day) => {
      return this.http.get<HistoricalRate>(API_URL_HISTORICAL(day, currency));
    });

    return forkJoin(requests).pipe(
      map((responses) => responses.map((res) => res.rates[currency])),
      concatAll()
    );
  }
}
