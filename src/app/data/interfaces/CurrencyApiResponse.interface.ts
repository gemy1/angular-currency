export interface CurrencyApiResponse {
  base: string;
  date: string;
  rates: {
    [code: string]: number;
  };
  success: boolean;
  timestamp: number;
}
