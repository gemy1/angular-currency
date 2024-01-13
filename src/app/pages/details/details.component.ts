import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  fromCurrency: string = '';
  toCurrency: string = '';
  amount: number = 0;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params) => {
      const { from, to, amount } = params;
      this.fromCurrency = from;
      this.toCurrency = to;
      this.amount = amount;
    });
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
