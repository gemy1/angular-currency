import { TestBed } from '@angular/core/testing';

import { HistoricalRateService } from './historical-rate.service';

describe('HistoricalRateService', () => {
  let service: HistoricalRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
