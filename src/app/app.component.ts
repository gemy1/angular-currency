import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './shared/services/currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private currenciesServices: CurrenciesService) {}

  ngOnInit(): void {
    this.currenciesServices.fetchCurrenciesRates();
  }
}
