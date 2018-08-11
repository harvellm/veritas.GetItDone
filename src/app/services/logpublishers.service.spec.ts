import { TestBed, inject } from '@angular/core/testing';

import { LogpublishersService } from './logpublishers.service';

describe('LogpublishersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogpublishersService]
    });
  });

  it('should be created', inject([LogpublishersService], (service: LogpublishersService) => {
    expect(service).toBeTruthy();
  }));
});
