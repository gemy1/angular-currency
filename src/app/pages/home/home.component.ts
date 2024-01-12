import { Component, OnDestroy, OnInit } from '@angular/core';
import { popularCurrencies } from '../../data/constants/currencies.constant';
import { CurrenciesService } from '../../shared/services/currencies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  popularCurrencies: string[] = popularCurrencies;
  baseCurrency: string = 'EUR';
  amount: number = 0;

  //subscriptions
  baseCurSubscription!: Subscription;
  amountSubscription!: Subscription;

  constructor(private currenciesService: CurrenciesService) {}
  ngOnInit(): void {
    this.baseCurSubscription = this.currenciesService.baseCurrency.subscribe(
      (val) => {
        this.baseCurrency = val;
      }
    );
    this.amountSubscription = this.currenciesService.amount.subscribe((val) => {
      this.amount = +val;
    });
  }

  ngOnDestroy(): void {
    // unsubscribe when component destroyed
    this.baseCurSubscription.unsubscribe();
    this.amountSubscription.unsubscribe();
  }
}
