import { TestBed } from '@angular/core/testing';

import { PoetAPIServiceService } from './poet-apiservice.service';

describe('PoetAPIServiceService', () => {
  let service: PoetAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoetAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
