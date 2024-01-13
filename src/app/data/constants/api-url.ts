import { environment } from '../../../environments/environment';
export const API_URL: string = `http://data.fixer.io/api/latest?access_key=${environment.fixerApi}&format=1`;
export const API_URL_HISTORICAL = (date: string, currency: string): string => {
  return `http://data.fixer.io/api/${date}?access_key=${environment.fixerApi}&symbols=${currency}&format=1`;
};
