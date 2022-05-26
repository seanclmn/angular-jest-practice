import { TestBed } from '@angular/core/testing';

import { ThisisaserviceService } from './thisisaservice.service';

describe('ThisisaserviceService', () => {
  let service: ThisisaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThisisaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
