import { TestBed } from '@angular/core/testing';

import { GetdateService } from './getdate.service';

describe('GetdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetdateService = TestBed.get(GetdateService);
    expect(service).toBeTruthy();
  });
});
