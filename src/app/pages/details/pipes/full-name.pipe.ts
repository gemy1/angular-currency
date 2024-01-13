import { Pipe, PipeTransform } from '@angular/core';
import { currenciesSymbols } from '../../../data/constants/currencies-symbols.constant';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return currenciesSymbols[value];
  }
}
