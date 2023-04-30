import { TestBed } from '@angular/core/testing';

import { RetairementService } from './retairement.service';

describe('RetairementService', () => {
  let service: RetairementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetairementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
