import { TestBed } from '@angular/core/testing';

import { PrivateNotificationService } from './private-notification.service';

describe('PrivateNotificationService', () => {
  let service: PrivateNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
