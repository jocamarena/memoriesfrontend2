import { TestBed } from '@angular/core/testing';

import { LoadmemoriesService } from './loadmemories.service';

describe('LoadmemoriesService', () => {
  let service: LoadmemoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadmemoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
