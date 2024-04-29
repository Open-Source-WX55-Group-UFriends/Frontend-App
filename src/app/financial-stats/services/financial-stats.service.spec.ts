import { TestBed } from '@angular/core/testing';

import { FinancialStatsService } from './financial-stats.service';

describe('FinancialStatsService', () => {
  let service: FinancialStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
