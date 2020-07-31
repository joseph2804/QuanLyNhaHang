import { TestBed } from '@angular/core/testing';

import { MerchandisesService } from './merchandises.service';

describe('MerchandisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerchandisesService = TestBed.get(MerchandisesService);
    expect(service).toBeTruthy();
  });
});
