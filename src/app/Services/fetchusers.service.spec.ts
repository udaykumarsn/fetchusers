import { TestBed } from '@angular/core/testing';

import { FetchusersService } from './fetchusers.service';

describe('FetchusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchusersService = TestBed.get(FetchusersService);
    expect(service).toBeTruthy();
  });
});
