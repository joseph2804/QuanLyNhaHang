import { TestBed } from '@angular/core/testing';

import { OverviewsService } from './overviews.service';

describe('OverviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverviewsService = TestBed.get(OverviewsService);
    expect(service).toBeTruthy();
  });
});
