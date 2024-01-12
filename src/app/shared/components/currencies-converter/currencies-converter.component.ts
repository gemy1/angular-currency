import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { currenciesCodes } from '../../../data/constants/currencies.constant';
import { NgForm } from '@angular/forms';
import { CurrenciesService } from '../../services/currencies.service';

@Component({
  selector: 'app-currencies-converter',
  templateUrl: './currencies-converter.component.html',
  styleUrl: './currencies-converter.component.css',
})
export class currenciesConverterComponent implements OnInit, AfterViewInit {
  //inputs as properties
  @Input() headTitle: string | undefined;
  @Input() fromCurrency: string = 'EUR';
  @Input() toCurrency: string = 'USD';
  @Input() inDetails!: boolean;
  // local properties
  rate: string | null = null;
  result: string = '0';
  currenciesCodes: string[] = currenciesCodes;
  // form ref from the template
  @ViewChild('f') form!: NgForm;

  constructor(private currenciesService: CurrenciesService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    //listen to change on the form
    this.form.valueChanges?.subscribe((newValues) => {
      const { amount, from, to } = newValues;
      // set the new selected values
      this.fromCurrency = from;
      this.toCurrency = to;
      this.result = '0';
      // calculate the rate
      this.rate = this.currenciesService.getConversionRate(from, to);
      // emit the base currency
      this.currenciesService.baseCurrency.emit(from);
      // emit the amount
      if (amount !== '') {
        this.currenciesService.amount.emit(+amount);
      }
    });
  }

  onSwap() {
    const { from, to } = this.form.value;
    this.fromCurrency = to;
    this.toCurrency = from;
  }

  onConvert() {
    const { amount, from, to } = this.form.value;
    this.result = this.currenciesService.getConvertedAmount(+amount, from, to);
  }
}
