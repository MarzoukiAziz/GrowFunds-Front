import { TestBed } from '@angular/core/testing';

import { PublicNotificationService } from './public-notification.service';

describe('PublicNotificationService', () => {
  let service: PublicNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
