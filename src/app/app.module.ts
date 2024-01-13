import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { DetailsComponent } from './pages/details/details.component';
import { currenciesConverterComponent } from './shared/components/currencies-converter/currencies-converter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyCardComponent } from './pages/home/currency-card/currency-card.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FullNamePipe } from './pages/details/pipes/full-name.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HistoricalChartComponent } from './pages/details/components/historical-chart/historical-chart.component';
import { HighlightResultDirective } from './shared/directives/highlight-result.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailsComponent,
    currenciesConverterComponent,
    CurrencyCardComponent,
    FooterComponent,
    FullNamePipe,
    HistoricalChartComponent,
    HighlightResultDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
