import { TestBed } from '@angular/core/testing';

import { IpMerchandisesService } from './ip-merchandises.service';

describe('IpMerchandisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpMerchandisesService = TestBed.get(IpMerchandisesService);
    expect(service).toBeTruthy();
  });
});
