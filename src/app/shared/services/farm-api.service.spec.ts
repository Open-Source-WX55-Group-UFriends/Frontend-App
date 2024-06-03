import { TestBed } from '@angular/core/testing';

import { FarmApiService } from './farm-api.service';

describe('FarmApiService', () => {
  let service: FarmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
